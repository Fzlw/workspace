import { ref, computed, ComputedRef } from 'vue'
import { isUndefined, cloneDeep } from 'lodash-es'
import { FormItemProps } from 'element-plus'
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
  columns: OriginFormColumn[]
  model: T
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

/**
 * 会产生编译错误 超过最大推导栈
 */
// @ts-ignore
export function useForm<T extends object>(opts: {
  columns: UseFormColumn[]
  initData?: T
}): {
  formState: ComputedRef<FormState<T>>
  getColumn(prop: UseFormColumn['prop']): FormColumn | null
  setColumn(prop: UseFormColumn['prop'], obj: Partial<UseFormColumn> | null, newVal?: any): void
  hideColumn(prop: UseFormColumn['prop']): void
  showColumn(prop: UseFormColumn['prop']): void
  toggleColumn(prop: UseFormColumn['prop']): void
}

export function useForm<T extends object>(opts: { columns: UseFormColumn[]; initData?: T }) {
  const model = ref<T>({ ...(opts.initData ?? null) } as T)
  const columns = ref<FormColumn[]>(opts.columns.map((i) => formatFormColumn(i)))

  const formState = computed<FormState<T>>(() => {
    // @ts-ignore
    const list = columns.value.filter((i) => !i._hidden) as OriginFormColumn[]

    return {
      model: model.value,
      columns: list,
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

  const toggleColumn = (prop: UseFormColumn['prop']) => {
    const column = getColumn(prop)

    if (column) {
      column._hidden = !column._hidden
    }
  }

  const hideColumn = (prop: UseFormColumn['prop']) => {
    const column = getColumn(prop)

    if (column) {
      column._hidden = true
    }
  }

  const showColumn = (prop: UseFormColumn['prop']) => {
    const column = getColumn(prop)

    if (column) {
      column._hidden = false
    }
  }

  return {
    formState,
    getColumn,
    setColumn,
    hideColumn,
    showColumn,
    toggleColumn,
  }
}
