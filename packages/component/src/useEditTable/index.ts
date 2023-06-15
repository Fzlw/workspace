import { useTable, UseTableColumn, defaultFormatter, UseTableOptions, TableState } from '../useTable'
import { Column, useColumn, ExpandColumn } from '../useColumn'
import { cloneDeep, isUndefined, isEqual } from 'lodash-es'
import { readonly, computed, reactive, unref } from 'vue'

export type UseEditTableColumn<T> = ExpandColumn<Column, UseTableColumn<T> & { editable?: boolean }>
export interface EditTableRow {
  _origin?: Omit<EditTableRow, '_editing' | '_delete' | '_origin'>
  _editing?: boolean
  _delete?: boolean
  [key: string]: any
}

export type UseEditTableOptions<T> = UseTableOptions<T, UseEditTableColumn<T>>

export const useEditTable = <T extends EditTableRow>(opts: UseTableOptions<T, UseEditTableColumn<T>>) => {
  const renderColumn = useColumn()
  const { tableState, ...other } = useTable<T, UseEditTableColumn<T>>({
    mapColumn(i) {
      const { formatter, editable, ...other } = i

      return {
        ...other,
        formatter(row, column, cellValue, index) {
          if ((isUndefined(editable) || editable === true) && (row as any)._editing) {
            return renderColumn(row, i) ?? ''
          }

          if (formatter) return formatter(row, column, cellValue, index)

          return defaultFormatter(cellValue, other.rFormat, other.defaultValue) ?? cellValue ?? other.defaultValue
        },
      }
    },
    ...opts,
    async query(p) {
      const res = await opts.query(p)

      res.list = res.list.map((i) => {
        const origin = cloneDeep(i)

        return Object.assign(i, { _origin: readonly(origin) })
      })

      return res
    },
  })

  const setColumn = (prop: Column['prop'], obj: Partial<UseEditTableColumn<T>>) => {
    tableState.columns = tableState.columns.map((i) => {
      if (i.prop === prop) return Object.assign(i, obj)

      return i
    })
  }

  const editRow = (row: T) => {
    row._editing = true
  }

  const cancelRow = (row: T) => {
    for (const key in row._origin) {
      row[key as keyof T] = row._origin[key]
    }
    row._editing = false
  }

  const delRow = (row: T) => {
    row._delete = true
  }

  const saveRow = (row: T) => {
    row._editing = false
  }

  const addRow = (row?: Partial<T>) => {
    // @ts-ignore
    const newRow: T = { _editing: true, ...(row ?? null), _origin: void 0 }

    tableState.data.push(newRow)

    return newRow
  }

  const rowIsEditing = (row: T) => {
    return !!row._editing
  }

  const rowIsAdded = (row: T) => {
    return isUndefined(row._origin)
  }

  /**
   * 分别对应 删除项, 新增项, 修改项
   */
  const getChangedRows = () => {
    const added: T[] = []
    const changed: T[] = []
    const removed: T[] = []

    for (const i of tableState.data) {
      if (i._delete) {
        if (!rowIsAdded(i)) {
          removed.push(unref(i))
        }
      } else {
        if (rowIsAdded(i)) {
          added.push(unref(i))
        } else {
          for (const key in i._origin) {
            if (!isEqual(i[key], i._origin[key])) {
              changed.push(unref(i))
              break
            }
          }
        }
      }
    }

    return [removed, added, changed] as const
  }

  const data = computed(() => tableState.data.filter((i) => !i._delete))
  const editTableState: TableState<T> = reactive({
    ...tableState,
    data,
  })

  return {
    ...other,
    tableState: editTableState,
    setColumn,
    editRow,
    delRow,
    cancelRow,
    saveRow,
    addRow,
    rowIsEditing,
    getChangedRows,
    rowIsAdded,
  }
}
