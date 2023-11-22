import { Pagination, BaseResult } from '../types'
import { OneTableProps, TableColumn, LoadMode } from '../Table/index'
import { reactive, unref, watch, shallowRef, shallowReactive } from 'vue'
import { dayjs, TableInstance } from 'element-plus'
import { isUndefined } from 'lodash-es'

export enum Format {
  dateTime,
  date,
}

export type UseTableColumn<T> = TableColumn<T> & { defaultValue?: string; rFormat?: Format; hidden?: boolean }

export type TableState<T = unknown> = Pick<OneTableProps<T>, 'data'> &
  Partial<Pick<OneTableProps<T>, 'loading' | 'selected'>> & {
    mode: LoadMode
    pending: boolean
    columns: UseTableColumn<T>[]
  }

export interface UseTableOptions<T, K> {
  columns: K[]
  query?: (p: Pagination) => BaseResult<T> | Promise<BaseResult<T>>
  pagination?: Partial<Pagination>
  mode?: LoadMode
  mapColumn?: (i: K) => K
}

export const formatToDatetime = (val: any) => dayjs(val).format('YYYY-MM-DD HH:mm:ss')
export const formatToDate = (val: any) => dayjs(val).format('YYYY-MM-DD')

export const defaultFormatter = (cellValue: any, format?: Format, defaultValue?: string) => {
  if (format === Format.dateTime && cellValue) return formatToDatetime(cellValue)
  if (format === Format.date && cellValue) return formatToDate(cellValue)
  if (cellValue === '') return defaultValue
}

export const useTable = <T, K extends UseTableColumn<T> = UseTableColumn<T>>(opts: UseTableOptions<T, K>) => {
  /**
   * el-table 组件实例
   */
  const tableRef = shallowRef<TableInstance | null>(null)
  const pagination: Pagination = shallowReactive({
    currentPage: 1,
    pageSize: 20,
    total: 0,
    pageSizes: [10, 20, 30, 40, 50],
    layout: 'sizes, total, prev, pager, next, jumper',
    'onUpdate:pageSize'(val: number) {
      pagination.pageSize = val
    },
    'onUpdate:currentPage'(val: number) {
      pagination.currentPage = val
    },
    ...opts.pagination,
  })
  const eachColumn = (i: K): UseTableColumn<T> => {
    const { defaultValue = '-', rFormat, formatter, ...other } = i

    return {
      ...other,
      formatter: (row, column, cellValue, index) => {
        if (formatter) return formatter(row, column, cellValue, index)

        return defaultFormatter(cellValue, rFormat, defaultValue) ?? cellValue ?? defaultValue
      },
      ...(i.type === 'index' && {
        index:
          i.index ??
          ((j: number) => {
            if (opts.mode === LoadMode.infinite) return j + 1

            return (pagination.currentPage - 1) * pagination.pageSize + j + 1
          }),
      }),
      ...(opts.mapColumn && opts.mapColumn(i)),
    }
  }
  const originColumn = shallowRef<TableState<T>['columns']>(opts.columns.map(eachColumn))
  const tableState: TableState<T> = reactive({
    loading: false,
    pending: false,
    data: [],
    selected: [],
    columns: unref(originColumn).filter((i) => !i.hidden),
    mode: opts.mode ?? LoadMode.single,
    // 同 Table 组件事件
    onNext() {
      if (tableState.mode === LoadMode.infinite) {
        handleNext()
      }
    },
    'onUpdate:selected'(list: T[]) {
      tableState.selected = list
    },
    ref(instance: any) {
      tableRef.value = instance?.elTable
    },
  })

  /**
   * 查询
   */
  const handleQuery = async (disabledLoading = false) => {
    if (!opts.query || tableState.pending) return

    try {
      tableState.pending = true
      !disabledLoading && (tableState.loading = true)

      const result = await opts.query(unref(pagination))
      const { list = [], total = 0 } = result ?? {}
      const page = pagination.currentPage

      tableState.data = page === 1 || tableState.mode === LoadMode.single ? list : tableState.data.concat(list)
      pagination.total = total || list.length
      tableState.pending = false
      tableState.loading = false
    } catch (error) {
      tableState.pending = false
      tableState.loading = false

      throw error
    }
  }

  /**
   * 下一页
   */
  const handleNext = () => {
    const { currentPage, pageSize, total = 0 } = pagination

    if (!tableState.loading && currentPage * pageSize < total) {
      pagination.currentPage = currentPage + 1
    }
  }

  const setState = (obj: Partial<Pick<TableState<T>, 'data' | 'loading' | 'mode' | 'selected'> & { columns: K[] }>) => {
    for (const key in obj) {
      if (key in tableState) {
        if (key === 'columns' && Array.isArray(obj.columns)) {
          originColumn.value = obj.columns.map(eachColumn)
          tableState.columns = unref(originColumn).filter((i) => !i.hidden)
        } else {
          tableState[key as keyof typeof tableState] = obj[key as keyof typeof obj] as never
        }
      }
    }
  }

  const toggleColumn = (prop: K['prop'] | K['prop'][] | Record<NonNullable<K['prop']>, boolean>, show?: boolean) => {
    if (!prop) return

    type KMap = Record<NonNullable<K['prop']>, boolean | undefined>

    const propMap: KMap =
      typeof prop === 'string'
        ? ({ [prop]: show } as KMap)
        : !Array.isArray(prop)
        ? prop
        : prop.reduce((map, i) => {
            !!i && (map[i] = show)
            return map
          }, {} as KMap)
    const newColumns: TableState<T>['columns'] = []

    for (const column of unref(originColumn)) {
      const iProp = column.prop as NonNullable<K['prop']>

      if (iProp && iProp in propMap) {
        column.hidden = isUndefined(propMap[iProp]) ? !column.hidden : !propMap[iProp]
      }

      !column.hidden && newColumns.push(column)
    }

    tableState.columns = newColumns
  }

  watch(
    () => [pagination.currentPage],
    () => handleQuery()
  )

  return {
    tableState,
    pagination,
    table: tableRef,
    handleQuery,
    handleNext,
    setState,
    toggleColumn,
  }
}
