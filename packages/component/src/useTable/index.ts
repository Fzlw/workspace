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
  Partial<Pick<OneTableProps<T>, 'loading' | 'selected'>> & { pagination: Pagination; mode: LoadMode }

export interface UseTableOptions<T, K> {
  columns: K[]
  query: (p: Pagination) => BaseResult<T> | Promise<BaseResult<T>>
  pagination?: Pagination
  mode?: LoadMode
  mapColumn?: (i: K) => K
}

export const defaultFormatter = (cellValue: any, format?: Format, defaultValue?: string) => {
  if (format === Format.dateTime && cellValue) return dayjs(cellValue).format('YYYY-MM-DD HH:mm:ss')
  if (format === Format.date && cellValue) return dayjs(cellValue).format('YYYY-MM-DD')
  if (cellValue === '') return defaultValue
}

export const useTable = <T, K extends UseTableColumn<T> = UseTableColumn<T>>(opts: UseTableOptions<T, K>) => {
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
    pagination: {
      page: 1,
      pageSize: 20,
      total: 0,
      ...opts.pagination,
    },
  })

  const handleQuery = async () => {
    if (!opts.query || tableState.loading) return

    try {
      tableState.loading = true

      const result = await opts.query(unref(tableState.pagination))
      const { list = [], total = 0 } = result ?? {}
      const page = tableState.pagination.page

      tableState.data = page === 1 || tableState.mode === LoadMode.single ? list : tableState.data.concat(list)
      tableState.pagination.total = total || list.length
    } catch (error) {
      console.error(error)
    }

    tableState.loading = false
  }

  const handleNext = () => {
    const { page, pageSize, total = 0 } = tableState.pagination

    if (!tableState.loading && page * pageSize < total) {
      tableState.pagination.page = page + 1
    }
  }

  watch(() => [tableState.pagination.page, tableState.pagination.pageSize], handleQuery)

  return {
    tableState,
    handleQuery,
    handleNext,
  }
}
