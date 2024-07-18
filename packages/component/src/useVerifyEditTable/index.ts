import { isUndefined } from 'lodash-es'
import { UnwrapRef, computed, h, ref, shallowRef, unref } from 'vue'
import { ElFormItem, FormInstance, FormValidateFailure } from 'element-plus'
import { ExpandColumn, ExcludeColumn, renderColumn } from '../useColumn'
import { UseFormColumn, formatFormColumn } from '../useForm'
import { UseTableOptions, defaultFormatter, TableState } from '../useTable'
import { UseEditTableColumn, EditTableRow, useEditTable } from '../useEditTable'
import { LoadMode } from '../Table'

export type UseVerifyEditTableColumn<T> = ExpandColumn<UseEditTableColumn<T>, ExcludeColumn<UseFormColumn, 'hidden'>>

export type UseVerifyEditTableOptions<T> = UseTableOptions<T, UseVerifyEditTableColumn<T>>

export interface VerifyTableState<T> {
  tableState: TableState<T>
  model: T | null
  ref?: any
}

export function useVerifyEditTable<T extends EditTableRow = EditTableRow>(opts: UseVerifyEditTableOptions<T>) {
  const { tableState, editRow, delRow, cancelRow, saveRow, addRow, ...other } = useEditTable<T>({
    mapColumn(i) {
      const { formItemProps, editable, formatter, ...other } = formatFormColumn(i) as UseVerifyEditTableColumn<T>

      return {
        ...other,
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
    ...(opts.query && {
      query(p) {
        if (p.currentPage === 1 || unref(tableState).mode === LoadMode.single) {
          if (unref(model)) {
            model.value = null
          }
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return opts.query!(p)
      },
    }),
  })

  const verifyForm = shallowRef<FormInstance | null>(null)
  const model = ref<VerifyTableState<T>['model']>(null)
  const verifyTableState = computed<VerifyTableState<T>>(() => {
    return {
      tableState: unref(tableState),
      model: unref(model) as T,
      ref(instance: any) {
        verifyForm.value = instance?.elForm
      },
    }
  })

  const vEditRow: typeof editRow = (row) => {
    if (unref(model)) return

    model.value = row as UnwrapRef<T>

    editRow(row)
  }

  const vDelRow: typeof delRow = (row) => {
    model.value = null

    delRow(row)
  }

  /**
   * @param del 当 row 是新增项时是否删除此项 默认为 true
   */
  const vCancelRow: typeof cancelRow = (row, del = true) => {
    model.value = null

    cancelRow(row, del)
  }

  const vSaveRow = async (row: T): Promise<[boolean, FormValidateFailure['fields'] | null]> => {
    try {
      const valid = await verifyForm.value?.validate?.()

      if (valid) {
        model.value = null

        saveRow(row)
      }

      return [!!valid, null]
    } catch (error) {
      return [false, error as FormValidateFailure['fields']]
    }
  }

  const vAddRow = (row?: T, position = -1) => {
    if (unref(model)) return

    const newRow = addRow(row, position)

    model.value = newRow as UnwrapRef<T>

    return newRow
  }

  const hasEditingRow = () => {
    return !!unref(model)
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
