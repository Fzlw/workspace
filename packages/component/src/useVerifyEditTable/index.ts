import { isUndefined } from 'lodash-es'
import { h, reactive, ref, unref } from 'vue'
import { ElFormItem, FormInstance, FormValidateFailure } from 'element-plus'
import { ExpandColumn, ExcludeColumn, useColumn } from '../useColumn'
import { UseFormColumn, formatFormColumn } from '../useForm'
import { UseTableOptions, defaultFormatter, TableState } from '../useTable'
import { UseEditTableColumn, EditTableRow, useEditTable } from '../useEditTable'

export type UseVerifyEditTableColumn<T> = ExpandColumn<UseEditTableColumn<T>, ExcludeColumn<UseFormColumn, 'hidden'>>

export type UseVerifyEditTableOptions<T> = UseTableOptions<T, UseVerifyEditTableColumn<T>>

export interface VerifyTableState<T> {
  tableState: TableState<T>
  model: T | null
  ref?: any
}

export function useVerifyEditTable<T extends EditTableRow>(opts: UseVerifyEditTableOptions<T>) {
  const renderColumn = useColumn()
  const { tableState, editRow, delRow, cancelRow, saveRow, addRow, ...other } = useEditTable<T>({
    mapColumn(i) {
      const { formItemProps, editable, formatter, ...other } = formatFormColumn(i) as UseVerifyEditTableColumn<T>

      return {
        ...other,
        label: i.label,
        formatter(row, column, cellValue, index) {
          if ((isUndefined(editable) || editable === true) && row?._editing) {
            return h(
              ElFormItem,
              {
                ...formItemProps,
                label: '',
              },
              { default: () => renderColumn(row, other) ?? '' }
            )
          }

          if (formatter) return formatter(row, column, cellValue, index)

          return defaultFormatter(cellValue, other.rFormat, other.defaultValue) ?? cellValue ?? other.defaultValue
        },
      }
    },
    ...opts,
  })

  const verifyForm = ref<FormInstance | null>(null)
  const verifyTableState: VerifyTableState<T> = reactive({
    tableState,
    model: null,
    ref(instance: any) {
      verifyForm.value = instance?.elForm
    },
  })

  const vEditRow: typeof editRow = (row) => {
    if (verifyTableState.model) return

    verifyTableState.model = row

    editRow(row)
  }

  const vDelRow: typeof delRow = (row) => {
    verifyTableState.model = null

    delRow(row)
  }

  const vCancelRow: typeof cancelRow = (row) => {
    verifyTableState.model = null

    cancelRow(row)
  }

  const vSaveRow = async (row: T): Promise<[boolean, FormValidateFailure['fields'] | null]> => {
    try {
      const valid = await verifyForm.value?.validate?.()

      if (valid) {
        verifyTableState.model = null

        saveRow(row)
      }

      return [!!valid, null]
    } catch (error) {
      return [false, error as FormValidateFailure['fields']]
    }
  }

  const vAddRow = (row?: T) => {
    if (verifyTableState.model) return

    const newRow = addRow(row)

    verifyTableState.model = newRow

    return newRow
  }

  const hasEditingRow = () => {
    return !!unref(verifyTableState.model)
  }

  return {
    verifyTableState,
    form: verifyForm,
    editRow: vEditRow,
    delRow: vDelRow,
    cancelRow: vCancelRow,
    saveRow: vSaveRow,
    addRow: vAddRow,
    hasEditingRow,
    ...other,
  }
}
