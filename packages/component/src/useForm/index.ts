import { shallowRef, unref, toRaw, reactive, onMounted } from 'vue'
import { isUndefined, cloneDeep } from 'lodash-es'
import { FormItemProps, FormInstance } from 'element-plus'
import { FormColumn as OriginFormColumn } from '../Form'
import { ExpandColumn, ExcludeColumn } from '../useColumn'

export type UseFormColumn = ExpandColumn<
  ExcludeColumn<OriginFormColumn, 'formItemProps'>,
  Partial<Omit<FormItemProps, 'prop' | 'required'>> & {
    hidden?: boolean
    requiredMsg?: string
    formItemProps?: OriginFormColumn['formItemProps']
  }
>
export interface FormState<T> {
  submitting: boolean
  columns: OriginFormColumn[]
  model: T
  // FIXME: 修复 tsconfig.json strict: true 下报错的问题
  ref?: any
}

export type IFormColumn = ExpandColumn<OriginFormColumn, { hidden?: boolean }>

export const formatFormColumn = (column: UseFormColumn) => {
  // FIXME: 移除label 使其在传递中保持响应式
  const { prop, formItemProps, labelWidth, rules, requiredMsg, ...other } = column

  const newColumn: IFormColumn = {
    ...other,
    prop,
    formItemProps: {
      prop,
      labelWidth,
      rules: rules
        ? rules
        : requiredMsg
        ? [
            {
              required: true,
              message: requiredMsg,
            },
          ]
        : void 0,
      ...formItemProps,
    },
  }

  return newColumn
}

export interface UseFormOptions<T> {
  columns: UseFormColumn[]
  initData?: Partial<T>
}

export type SubmitPost<T> = (model: T) => any

export function useForm<T extends object>(opts: UseFormOptions<T>) {
  /**
   * el-form 组件实例
   */
  const formRef = shallowRef<FormInstance | null>(null)
  const originColumns = shallowRef(opts.columns.map((i) => formatFormColumn(i)))
  const formState: FormState<T> = reactive({
    submitting: false,
    model: {} as any,
    columns: unref(originColumns).filter((i) => !i.hidden) as any[],
    ref(instance: any) {
      formRef.value = instance?.elForm
    },
  })

  /**
   * 通过prop获取列
   */
  const getColumn = (prop: UseFormColumn['prop']) => {
    for (const i of unref(originColumns)) {
      if (i.prop === prop) {
        return i
      }
    }
    return null
  }

  /**
   * 通过prop设置列的属性
   * newVal 可以设置当前prop的表单值
   */
  const setColumn = (
    prop: UseFormColumn['prop'],
    obj: Partial<ExcludeColumn<UseFormColumn, 'hidden'>> | null,
    newVal?: any
  ) => {
    for (const column of formState.columns) {
      if (column.prop === prop) {
        for (const originColumn of opts.columns) {
          if (originColumn.prop === prop) {
            const copyColumn = cloneDeep(originColumn)
            const newColumn = formatFormColumn(Object.assign(copyColumn, obj))

            Object.assign(column, newColumn)
            break
          }
        }
        break
      }
    }

    if (!isUndefined(newVal)) {
      formState.model[prop as keyof FormState<T>['model']] = newVal
    }
  }

  /**
   * 用于快速更新表单项状态 避免 setColumn 性能问题
   */
  const patchColumn = (column: IFormColumn, patch?: Partial<ExcludeColumn<UseFormColumn, 'prop'>>) => {
    if (patch) {
      const newColumn = formatFormColumn({
        ...patch,
        prop: column.prop,
        formItemProps: column.formItemProps,
      } as UseFormColumn)

      Object.assign(column, newColumn)
    }
  }

  /**
   * 表单项的显示隐藏
   */
  const toggleColumn = (
    prop: UseFormColumn['prop'] | UseFormColumn['prop'][] | Record<UseFormColumn['prop'], boolean>,
    show?: boolean
  ) => {
    if (!prop) return

    type KMap = Record<NonNullable<UseFormColumn['prop']>, boolean | undefined>

    const propMap: KMap =
      typeof prop === 'string'
        ? ({ [prop]: show } as KMap)
        : !Array.isArray(prop)
        ? prop
        : prop.reduce((map, i) => {
            !!i && (map[i] = show)
            return map
          }, {} as KMap)
    const newColumns: FormState<T>['columns'] = []

    for (const column of unref(originColumns)) {
      const iProp = column.prop as NonNullable<UseFormColumn['prop']>

      if (iProp && iProp in propMap) {
        column.hidden = isUndefined(propMap[iProp]) ? !column.hidden : !propMap[iProp]
      }

      !column.hidden && newColumns.push(column)
    }

    formState.columns = newColumns
  }

  /**
   * 表单提交
   */
  const submit = async (post?: (model: T) => any) => {
    try {
      formState.submitting = true

      const valid = (await formRef.value?.validate()) ?? true

      if (valid && post) await post(cloneDeep(toRaw(formState.model)))

      formState.submitting = false
    } catch (error) {
      formState.submitting = false

      throw error
    }
  }

  /**
   * 设置表单状态
   * isReset为true时会重置表单项
   */
  const setModel = (obj: Partial<T>, isReset = false) => {
    if (isReset) {
      const keys: string[] = []
      const newCols: FormState<T>['columns'] = []

      for (const i of unref(originColumns)) {
        i.prop && keys.push(i.prop)
        !i.hidden && newCols.push(i)
      }
      for (const key in formState.model) {
        formState.model[key] = undefined as any
      }

      formState.columns = newCols
      formRef.value?.resetFields(keys)
    }
    for (const key in obj) {
      formState.model[key] = cloneDeep(obj[key]) as any
    }
  }

  const getModel = <K extends keyof T = keyof T>(key: K): T[K] => {
    return formState.model[key]
  }

  onMounted(() => {
    if (opts.initData) {
      setModel(cloneDeep(opts.initData))
    }
  })

  return {
    formState,
    getColumn,
    setColumn,
    toggleColumn,
    submit,
    setModel,
    form: formRef,
    getModel,
    patchColumn,
    originColumns,
  }
}
