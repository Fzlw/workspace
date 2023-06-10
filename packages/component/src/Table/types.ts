import { TableColumnCtx, TableProps } from 'element-plus'

export type TableColumn<T = unknown> = Partial<TableColumnCtx<T>>

export interface OneTableProps<T = unknown> extends TableProps<T> {
  columns: TableColumn<T>[]
  loading?: boolean
  selected?: T[]
  mode?: LoadMode
}

export enum LoadMode {
  single,
  infinite,
}
