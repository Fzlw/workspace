import { PaginationProps } from 'element-plus'

export interface Pagination extends Partial<Omit<PaginationProps, 'currentPage' | 'pageSize' | 'total'>> {
  currentPage: number
  pageSize: number
  total?: number
}

export enum ChainMode {
  step,
  concurrency,
}

export type BaseResult<T = unknown> = Pick<Pagination, 'total'> & { list: T[] }
