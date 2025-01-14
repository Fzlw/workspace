import { Pagination } from '../types'
import { LoadMode } from '../Table'
import { UseTableColumn, useTable } from '../useTable'
import { UseFormColumn, useForm } from '../useForm'
import { useFormDialog, UseFormDialogOptions, DialogAndDrawer } from '../useFormDialog'
import { Commands, CommandOpt, CommandOptions } from './types'
import { BaseResult } from '../types'
import { shallowReactive, unref, watch } from 'vue'
import { ElMessageBox, ElMessageBoxOptions } from 'element-plus'
import { useCommand } from './useCommand'
import { isUndefined, noop } from 'lodash-es'
import { ExpandColumn } from '../useColumn'

export type UseLayoutColumn = ExpandColumn<
  UseFormColumn,
  {
    disabledType?: Commands[]
    hiddenType?: Commands[]
  }
>

export interface UseLayoutOptions<T, Q, K> {
  get?: (query: Q, p: Pagination) => BaseResult<T> | Promise<BaseResult<T>>
  post?: UseFormDialogOptions<K>['post']
  put?: UseFormDialogOptions<K>['post']
  delete?: (row: T) => any
  export?: (row: T | null | undefined, query: Q, p: Pagination) => any
  // TODO: 下一版本移除掉
  commands?: CommandOpt<T>
  commandColumn?: UseTableColumn<T>
  columns?: UseTableColumn<T>[]
  pagination?: Pagination
  mode?: LoadMode
  queryColumns?: UseFormColumn[]
  formColumns?: UseLayoutColumn[]
  queryState?: Partial<Q>
  align?: UseTableColumn<T>['align']
}

/**
 * columns 里对于 type=index useTable 内置了 index 方法 也可以传入覆盖
 * T: 获取的列表数据
 * Q: 筛选条件
 * K: 新增列表数据
 */
export function useLayout<T extends object, Q extends object = Partial<T>, K extends object = T>(
  opts: UseLayoutOptions<T, Q, K>
) {
  const {
    get,
    post,
    put,
    delete: dM,
    export: eM,
    columns = [],
    mode,
    pagination: pa,
    queryColumns = [],
    formColumns = [],
    commands,
    commandColumn,
    queryState: qS,
    align = 'center', // 默认居中展示
  } = opts

  function command<O extends Commands>(cmd: O, row?: T | null, options?: CommandOptions[O]): Promise<void> {
    const rowT = row ?? ({} as T)
    const { promise, resolve, reject } = Promise.withResolvers<void>()
    const columnMap: Record<number, Record<string, unknown>> = {}

    if (
      cmd === Commands.post ||
      cmd === Commands.put ||
      cmd === Commands.postByDrawer ||
      cmd === Commands.putByDrawer
    ) {
      for (let i = 0, len = unref(formOpera.originColumns).length; i < len; i++) {
        const ii = unref(formOpera.originColumns)[i] as UseLayoutColumn
        const disabled = ii.disabledType?.includes(cmd)
        const hidden = ii.hiddenType?.includes(cmd)

        columnMap[i] = {
          ...(!isUndefined(disabled) && { disabled }),
          ...(!isUndefined(hidden) && { hidden }),
        }
      }
    }

    switch (cmd) {
      case Commands.post:
      case Commands.postByDrawer:
        formOpera.setModel(rowT, true, columnMap)
        formOpera.show({
          title: '新增',
          ...(options as DialogAndDrawer),
          onClosed: () => {
            ;(options as any)?.onClosed?.()
            reject()
          },
          onSubmit: () => {
            mixedState.posting = true

            return formOpera
              .submit(post)
              .then(resolve)
              .finally(() => (mixedState.posting = false))
          },
        })
        break

      case Commands.put:
      case Commands.putByDrawer:
        formOpera.setModel(rowT, true, columnMap)
        formOpera.show({
          title: '修改',
          ...(options as DialogAndDrawer),
          onClosed: () => {
            ;(options as any)?.onClosed?.()
            reject()
          },
          onSubmit: () => {
            mixedState.putting = true

            return formOpera
              .submit(put)
              .then(resolve)
              .finally(() => (mixedState.putting = false))
          },
        })
        break

      case Commands.delete:
        ElMessageBox({
          type: 'warning',
          message: '确定删除所选的数据吗？',
          title: '确认删除',
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          showCancelButton: true,
          confirmButtonClass: 'el-button--danger',
          ...(options as ElMessageBoxOptions),
        })
          .then(() => {
            mixedState.deleting = true

            return dM?.(rowT)
          })
          .then(resolve)
          .catch(reject)
          .finally(() => (mixedState.deleting = false))
        break

      case Commands.export:
        Promise.resolve()
          .then(() => {
            mixedState.exporting = true

            return eM?.(rowT, unref(queryState.model), unref(pagination))
          })
          .then(resolve)
          .catch(reject)
          .finally(() => (mixedState.exporting = false))
        break

      default:
        resolve()
        break
    }

    return promise
  }

  const commandColumns = commands ? useCommand<T>(commands, command, commandColumn) : null

  // 筛选
  const { formState: queryState, ...queryOpera } = useForm<Q>({
    columns: queryColumns,
    initData: qS,
  })

  // 表格数据展示
  const { tableState, pagination, ...tableOpera } = useTable<T>({
    columns: commandColumns ? columns.concat(commandColumns) : columns,
    mode: mode ?? LoadMode.single,
    query: get ? (p) => get(unref(queryState.model), p) : void 0,
    pagination: pa,
    mapColumn() {
      return { align }
    },
  })

  const query = (disabledLoading?: boolean) => queryOpera.submit(() => tableOpera.handleQuery(disabledLoading))

  // 重置查询表单数据
  const resetQuery = () => queryOpera.setModel(qS ?? {}, true)

  // 新增等弹窗表单
  const { formDialogState, ...formOpera } = useFormDialog<K>({
    columns: formColumns,
    post: noop,
  })

  // 杂项
  const mixedState = shallowReactive({
    querying: false, // get 接口调用中
    posting: false, // post 接口调用中
    putting: false, // put 接口调用中
    deleting: false, // delete 接口调用中
    exporting: false, // export 接口调用中
  })

  watch(
    () => tableState.pending,
    (val) => (mixedState.querying = val),
    { immediate: true }
  )

  return {
    tableState,
    queryState,
    formDialogState,
    pagination,
    mixedState,

    query,
    resetQuery,
    command,

    queryOpera,
    tableOpera,
    formDialogOpera: formOpera,
  }
}
