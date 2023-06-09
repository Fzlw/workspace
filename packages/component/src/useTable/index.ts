import { Pagination, BaseResult } from '../types'
import { OneTableProps, TableColumn } from '../Table/index'
import { reactive, unref, watch } from 'vue'
import { dayjs } from 'element-plus'

export enum LoadMode {
  single,
  infinite,
}

export enum Format {
  dateTime,
  date,
}

export type UseTableColumn<T> = TableColumn<T> & { defaultValue?: string; rFormat?: Format }

export type TableState<T = unknown> = Pick<OneTableProps<T>, 'data' | 'columns'> &
  Partial<Pick<OneTableProps<T>, 'loading' | 'selected'>> & { mode: LoadMode }

export interface UseTableOptions<T, K> {
  columns: K[]
  query: (p: Pagination) => BaseResult<T> | Promise<BaseResult<T>>
  pagination?: Partial<Pagination>
  mode?: LoadMode
  mapColumn?: (i: K) => K
}

export const defaultFormatter = (cellValue: any, format?: Format, defaultValue?: string) => {
  if (format === Format.dateTime && cellValue) return dayjs(cellValue).format('YYYY-MM-DD HH:mm:ss')
  if (format === Format.date && cellValue) return dayjs(cellValue).format('YYYY-MM-DD')
  if (cellValue === '') return defaultValue
}

export const useTable = <T, K extends UseTableColumn<T> = UseTableColumn<T>>(opts: UseTableOptions<T, K>) => {
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
  })

  const handleQuery = async () => {
    if (!opts.query || tableState.loading) return

    try {
      tableState.loading = true

      const result = await opts.query(unref(pagination))
      const { list = [], total = 0 } = result ?? {}
      const page = pagination.currentPage

      tableState.data = page === 1 || tableState.mode === LoadMode.single ? list : tableState.data.concat(list)
      pagination.total = total || list.length
    } catch (error) {
      console.error(error)
    }

    tableState.loading = false
  }

  const handleNext = () => {
    const { currentPage, pageSize, total = 0 } = pagination

    if (!tableState.loading && currentPage * pageSize < total) {
      pagination.currentPage = currentPage + 1
    }
  }

  watch(() => [pagination.currentPage], handleQuery)

  return {
    tableState,
    pagination,
    handleQuery,
    handleNext,
  }
}