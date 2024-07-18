import { useTable, UseTableColumn, defaultFormatter, UseTableOptions, TableState } from '../useTable'
import { Column, renderColumn, ExpandColumn } from '../useColumn'
import { cloneDeep, isUndefined, isEqual } from 'lodash-es'
import { readonly, computed, unref } from 'vue'

export type UseEditTableColumn<T> = ExpandColumn<Column, UseTableColumn<T> & { editable?: boolean }>
export interface EditTableRow {
  _origin?: Omit<EditTableRow, '_editing' | '_delete' | '_origin' | '_new'>
  _editing?: boolean
  _delete?: boolean
  _new?: boolean
  [key: string]: any
}

export type UseEditTableOptions<T> = UseTableOptions<T, UseEditTableColumn<T>>

export const useEditTable = <T extends EditTableRow = EditTableRow>(
  opts: UseTableOptions<T, UseEditTableColumn<T>>
) => {
  const { tableState, setState, ...other } = useTable<T, UseEditTableColumn<T>>({
    mapColumn(i) {
      const { formatter, editable, ...other } = i

      return {
        ...other,
        formatter(row, column, cellValue, index) {
          if ((isUndefined(editable) || editable === true) && row._editing) {
            return renderColumn(row, i) ?? ''
          }

          if (formatter) return formatter(row, column, cellValue, index)

          return defaultFormatter(cellValue, other.rFormat, other.defaultValue) ?? cellValue ?? other.defaultValue
        },
      }
    },
    ...opts,
    async query(p) {
      if (!opts.query) return { list: [] }

      const res = await opts.query(p)

      res.list = res.list.map((i) => {
        const origin = cloneDeep(i)

        return Object.assign(i, { _origin: readonly(origin) })
      })

      return res
    },
  })

  const setColumn = (prop: Column['prop'], obj: Partial<UseEditTableColumn<T>>) => {
    setState({
      columns: opts.columns.map((i) => {
        if (i.prop === prop) return Object.assign({}, i, obj)

        return i
      }),
    })
  }

  const editRow = (row: T) => {
    row._editing = true
  }

  /**
   * @param del 当 row 是新增项时是否删除此项 默认为 true
   */
  const cancelRow = (row: T, del = true) => {
    if (rowIsAdded(row) && del) return delRow(row)

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

  const addRow = (row?: Partial<T>, position = -1) => {
    const newRow = { _editing: true, ...(row ?? null), _new: true, _origin: row ? cloneDeep(row) : void 0 } as T
    const result: T[] = []
    const len = tableState.data.length
    const p = position < 0 ? len + 1 + position : position
    const index = p >= 0 ? Math.min(len, p) : 0

    for (let i = 0, ii = 0; i < len; i++) {
      const current = tableState.data[i]

      ii === index && result.push(newRow)
      !current._delete && ii++
      result.push(current)
    }

    if (index === len) result.push(newRow)

    setState({ data: result })

    return newRow
  }

  /**
   * @param row 移动当前项
   * @param position 移动位置
   * @param relative true：相对当前位置向前或向后移动 false: 移动到绝对索引位置   默认为true
   */
  const moveRow = (row: T, position: number, relative = true) => {
    const target = unref(tableState).data
    const last = target.length - 1

    // 绝对模式下 检查索引值
    if (!relative) {
      if (position < 0 || position > last) {
        return
      }
    }

    for (let i = 0; i <= last; i++) {
      if (target[i] === row) {
        const index = relative ? i + position : position
        const limitIndex = Math.max(Math.min(index, last), 0)
        const newTarget = target.slice(0, i).concat(target.slice(i + 1))

        newTarget.splice(limitIndex, 0, target[i])
        setState({ data: newTarget })
        break
      }
    }
  }

  const rowIsEditing = (row: T) => {
    return !!row._editing
  }

  const rowIsAdded = (row: T) => {
    return row._new === true
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

  const editTableState = computed<TableState<T>>(() => {
    const ts = unref(tableState)

    return {
      ...ts,
      data: ts.data.filter((i) => !i._delete),
    }
  })

  const setEditTableState: typeof setState = (obj) => {
    if (Array.isArray(obj.data)) {
      for (const i of obj.data) {
        i._origin = i._origin ?? cloneDeep(i)
      }
    }
    setState(obj)
  }

  const cloneRow = (row: T) => {
    return cloneDeep(row._origin) ?? ({} as T)
  }

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
    setState: setEditTableState,
    moveRow,
    cloneRow,
  }
}
