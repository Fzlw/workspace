export interface Pagination {
  page: number
  pageSize: number
  total?: number
}

export enum ChainMode {
  step,
  concurrency,
}

export type BaseResult<T = unknown> = Pick<Pagination, 'total'> & { list: T[] }
