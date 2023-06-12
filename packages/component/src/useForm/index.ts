import { ref, computed, ComputedRef, unref, Ref, toRaw } from 'vue'
import { isUndefined, cloneDeep } from 'lodash-es'
import { FormItemProps, FormInstance } from 'element-plus'
import { FormColumn as OriginFormColumn } from '../Form'
import { ExpandColumn, ExcludeColumn } from '../useColumn'

export type UseFormColumn = ExpandColumn<
  ExcludeColumn<OriginFormColumn, 'formItemProps'>,
  Partial<Pick<FormItemProps, 'label' | 'labelWidth' | 'rules'>> & {
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

type FormColumn = ExpandColumn<OriginFormColumn, { _hidden?: boolean }>

export const formatFormColumn = (column: UseFormColumn) => {
  const { prop, formItemProps, label, labelWidth, rules, requiredMsg, hidden, ...other } = column

  const newColumn: FormColumn = {
    ...other,
    _hidden: hidden,
    prop,
    formItemProps: {
      prop,
      label,
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
        : [],
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

/**
 * TODO: 会产生编译错误 超过最大推导栈
 */
// @ts-ignore
export function useForm<T extends object>(
  opts: UseFormOptions<T>
): {
  formState: ComputedRef<FormState<T>>
  getColumn(prop: UseFormColumn['prop']): FormColumn | null
  setColumn(prop: UseFormColumn['prop'], obj: Partial<UseFormColumn> | null, newVal?: any): void
  toggleColumn(prop: UseFormColumn['prop'] | UseFormColumn['prop'][], state?: boolean): void
  submit(post: SubmitPost<T>): Promise<void>
  setModel(obj: Partial<T>, reset?: boolean): void
  form: Ref<FormInstance | null>
  getModel<K extends keyof T = keyof T>(key: K): T[K]
}

export function useForm<T extends object>(opts: UseFormOptions<T>) {
  const model = ref<T>({ ...(opts.initData ?? null) } as T)
  const columns = ref<FormColumn[]>(opts.columns.map((i) => formatFormColumn(i)))

  const formRef = ref<FormInstance | null>(null)
  const submitting = ref(false)
  const formState = computed<FormState<T>>(() => {
    // @ts-ignore
    const list = columns.value.filter((i) => !i._hidden) as OriginFormColumn[]

    return {
      submitting: submitting.value,
      model: model.value,
      columns: list,
      ref(instance: any) {
        formRef.value = instance?.elForm
      },
    }
  })

  const getColumn = (prop: UseFormColumn['prop']) => {
    for (const i of columns.value) {
      if (i.prop === prop) {
        return i
      }
    }
    return null
  }

  const setColumn = (prop: UseFormColumn['prop'], obj: Partial<UseFormColumn> | null, newVal?: any) => {
    const originColumn = opts.columns.find((i) => i.prop === prop)
    const column = getColumn(prop)

    if (originColumn && column && obj) {
      const copyColumn = cloneDeep(originColumn)
      const newColumn = formatFormColumn(Object.assign(copyColumn, obj))

      Object.assign(column, newColumn)
    }

    if (!isUndefined(newVal)) {
      formState.value.model[prop as keyof FormState<T>['model']] = newVal
    }
  }

  const toggleColumn = (prop: UseFormColumn['prop'] | UseFormColumn['prop'][], state?: boolean) => {
    const props = Array.isArray(prop) ? prop : [prop]

    for (const i of columns.value) {
      if (props.includes(i.prop)) {
        i._hidden = !state ?? !i._hidden
      }
    }
  }

  const submit = async (post?: (model: T) => any) => {
    try {
      submitting.value = true

      const valid = (await formRef.value?.validate()) ?? true

      if (valid && post) await post(toRaw(unref(model)))

      submitting.value = false
    } catch (error) {
      submitting.value = false

      throw error
    }
  }

  const setModel = (obj: Partial<T>, isReset = false) => {
    if (isReset) {
      model.value = obj
      // @ts-ignore
      columns.value = opts.columns.map((i) => formatFormColumn(i))
      formRef.value?.clearValidate()
      return
    }
    model.value = { ...model.value, ...obj }
  }

  const getModel = (key: keyof T) => {
    return model.value[key]
  }

  return {
    formState,
    getColumn,
    setColumn,
    toggleColumn,
    submit,
    setModel,
    form: formRef,
    getModel,
  }
}
