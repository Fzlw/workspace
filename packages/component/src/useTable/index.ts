import { Pagination, BaseResult } from '../types'
import { OneTableProps, TableColumn, LoadMode } from '../Table/index'
import { reactive, unref, watch, ref } from 'vue'
import { dayjs, TableInstance } from 'element-plus'

export enum Format {
  dateTime,
  date,
}

export type UseTableColumn<T> = TableColumn<T> & { defaultValue?: string; rFormat?: Format }

export type TableState<T = unknown> = Pick<OneTableProps<T>, 'data' | 'columns'> &
  Partial<Pick<OneTableProps<T>, 'loading' | 'selected'>> & { mode: LoadMode; pending: boolean }

export interface UseTableOptions<T, K> {
  columns: K[]
  query: (p: Pagination) => BaseResult<T> | Promise<BaseResult<T>>
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
  const tableRef = ref<TableInstance | null>(null)
  const pagination: Pagination = reactive({
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
  const tableState: TableState<T> = reactive({
    loading: false,
    pending: false,
    data: [],
    selected: [],
    columns: opts.columns.map((i) => {
      const { defaultValue = '-', rFormat, formatter, ...other } = i

      return (
        opts.mapColumn?.(i) ?? {
          ...other,
          formatter: (row, column, cellValue, index) => {
            if (formatter) return formatter(row, column, cellValue, index)

            return defaultFormatter(cellValue, rFormat, defaultValue) ?? cellValue ?? defaultValue
          },
        }
      )
    }),
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
    } catch (error) {
      console.error(error)
    }

    tableState.pending = false
    tableState.loading = false
  }

  const handleNext = () => {
    const { currentPage, pageSize, total = 0 } = pagination

    if (!tableState.loading && currentPage * pageSize < total) {
      pagination.currentPage = currentPage + 1
    }
  }

  const setState = (obj: Partial<Pick<TableState<T>, 'data' | 'loading' | 'mode' | 'selected'>>) => {
    for (const key in obj) {
      if (key in tableState) {
        tableState[key as keyof typeof tableState] = obj[key as keyof typeof obj] as never
      }
    }
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
  }
}
