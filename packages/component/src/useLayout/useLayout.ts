import { Pagination } from '../types'
import { LoadMode } from '../Table'
import { UseTableColumn, useTable } from '../useTable'
import { UseFormColumn, useForm } from '../useForm'
import { useFormDialog, UseFormDialogOptions, DialogAndDrawer } from '../useFormDialog'
import {
  Commands,
  CommandOptions,
  CustomOptions,
  CommandRType,
  CommandsAndString,
  cmdToRType,
  defaultCmdTitle,
  mixedKey,
} from './types'
import { BaseResult } from '../types'
import { isReactive, shallowReactive, unref, watch } from 'vue'
import { ElMessageBox, ElMessageBoxOptions } from 'element-plus'
import { isPlainObject, noop, set } from 'lodash-es'
import { ExpandColumn } from '../useColumn'
import { getColumnMap } from './utils'
import { callBack } from '../utils'
import { onMounted } from 'vue'
import { FormDialogProps } from '../FormDialog'

export type UseLayoutColumn = ExpandColumn<
  UseFormColumn,
  {
    disabledType?: CommandsAndString | CommandsAndString[]
    showType?: CommandsAndString | CommandsAndString[]
    hiddenType?: CommandsAndString | CommandsAndString[]
  }
>

export interface UseLayoutOptions<T, Q, K> {
  get?: (query: Q, p: Pagination) => BaseResult<T> | Promise<BaseResult<T>>
  post?: UseFormDialogOptions<K>['post']
  put?: UseFormDialogOptions<K>['post']
  delete?: (row: T) => any
  export?: (row: T | null | undefined, query: Q, p: Pagination) => any
  custom?: (cmd: string, row: any, form?: any, q?: Q, p?: Pagination) => any
  columns?: UseTableColumn<T>[]
  pagination?: Pagination
  mode?: LoadMode
  queryColumns?: UseFormColumn[]
  formColumns?: UseLayoutColumn[]
  customColumns?: UseLayoutColumn[]
  queryState?: Partial<Q>
  align?: UseTableColumn<T>['align']
  immediate?: boolean
  resetShouldQuery?: boolean
  watchPageSize?: boolean
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
    custom,
    columns = [],
    mode,
    pagination: pa,
    queryColumns = [],
    formColumns = [],
    customColumns = [],
    queryState: qS,
    align = 'center', // 默认居中展示
    immediate = true, // 是否立即发起请求
    resetShouldQuery = true, // 重置查询表单时是否调用查询接口
    watchPageSize = true,
  } = opts

  function command<O extends Commands>(cmd: O, row?: T | null, options?: CommandOptions[O]): Promise<void> {
    const rowT = row ?? ({} as T)
    const { promise, resolve, reject } = Promise.withResolvers<any>()
    const optionCmd = (options as CustomOptions)?.cmd
    const cmdIsCustom = cmd === Commands.custom
    const rType = cmdIsCustom ? (options as CustomOptions)?.rType : cmdToRType[cmd]
    const mixKey = cmdIsCustom ? optionCmd : mixedKey[cmd]
    const start = () => {
      set(mixedState, mixKey, true)
      isReactive(rowT) && isPlainObject(rowT) && set(rowT, `_${mixKey}_`, true)
    }
    const end = () => {
      set(mixedState, mixKey, false)
      isReactive(rowT) && isPlainObject(rowT) && set(rowT, `_${mixKey}_`, false)
    }

    switch (rType) {
      case CommandRType.form:
      case CommandRType.drawer: {
        const columnMap = getColumnMap(unref(formOpera.originColumns) as UseLayoutColumn[], cmd, optionCmd)

        formOpera.setModel(rowT, true, columnMap)
        formOpera.show({
          title: defaultCmdTitle[cmd],
          ...(options as DialogAndDrawer),
          rType,
          onClosed: () => {
            callBack((options as FormDialogProps)?.onClosed)
            reject()
          },
          onSubmit: () => {
            start()

            return formOpera
              .submit(
                cmd === Commands.post || cmd === Commands.postByDrawer
                  ? post
                  : cmd === Commands.put || cmd === Commands.putByDrawer
                  ? put
                  : (form) => custom?.(optionCmd, rowT, form)
              )
              .then(resolve)
              .finally(end)
          },
        })
        break
      }

      case CommandRType.afterForm:
      case CommandRType.afterDrawer: {
        start()

        custom?.(optionCmd, rowT)
          .then((data: any) => {
            const columnMap = getColumnMap(unref(formOpera.originColumns) as UseLayoutColumn[], cmd, optionCmd)

            formOpera.setModel(data ?? {}, true, columnMap)
            formOpera.show({
              title: defaultCmdTitle[cmd],
              ...(options as DialogAndDrawer),
              rType,
              onClosed: () => {
                callBack((options as FormDialogProps)?.onClosed)
                reject()
              },
              onSubmit: () => {
                let form: any

                return formOpera.submit((val) => (form = val)).then(() => resolve(form))
              },
            })
          })
          .catch(reject)
          .finally(end)
        break
      }

      case CommandRType.messageBox:
        ElMessageBox({
          type: 'warning',
          message: '确定删除所选的数据吗？',
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          showCancelButton: true,
          confirmButtonClass: 'el-button--danger',
          title: defaultCmdTitle[cmd],
          ...(options as ElMessageBoxOptions),
        })
          .then(() => {
            start()

            return cmdIsCustom ? custom?.(optionCmd, rowT, null) : dM?.(rowT)
          })
          .then(resolve)
          .catch(reject)
          .finally(end)
        break

      case CommandRType.none:
        Promise.resolve()
          .then(() => {
            start()

            return cmdIsCustom
              ? custom?.(optionCmd, rowT, null, unref(queryState.model), unref(pagination))
              : eM?.(rowT, unref(queryState.model), unref(pagination))
          })
          .then(resolve)
          .catch(reject)
          .finally(end)
        break

      default:
        resolve(void 0)
        break
    }

    return promise
  }

  // 筛选
  const { formState: queryState, ...queryOpera } = useForm<Q>({
    columns: queryColumns,
    initData: qS,
  })

  // 表格数据展示
  const { tableState, pagination, ...tableOpera } = useTable<T>({
    columns,
    mode: mode ?? LoadMode.single,
    query: get ? (p) => get(unref(queryState.model), p) : void 0,
    pagination: pa,
    mapColumn() {
      return { align }
    },
  })

  const query = (disabledLoading?: boolean) => queryOpera.submit(() => tableOpera.handleQuery(disabledLoading))

  // 重置查询表单数据
  const resetQuery = () => {
    queryOpera.setModel(qS ?? {}, true)
    if (resetShouldQuery) {
      pagination.currentPage = 1
      query()
    }
  }

  // 新增等弹窗表单
  const { formDialogState, ...formOpera } = useFormDialog<K>({
    columns: formColumns
      .map<UseLayoutColumn>((i) => {
        return { ...i, showType: [Commands.post, Commands.put, Commands.postByDrawer, Commands.putByDrawer] }
      })
      .concat(customColumns),
    post: noop,
  })

  // 杂项
  const mixedState = shallowReactive<Record<string, boolean>>({
    querying: false, // get 接口调用中
    posting: false, // post 接口调用中
    putting: false, // put 接口调用中
    deleting: false, // delete 接口调用中
    exporting: false, // export 接口调用中
  })

  watch(
    // NOTE: 当 disabledLoading=true 时页面上不应该出现 loading
    () => tableState.loading,
    (val) => (mixedState.querying = !!val),
    { immediate: true }
  )

  watch(
    () => pagination.pageSize,
    () => {
      if (watchPageSize) {
        pagination.currentPage = 1
        query()
      }
    }
  )

  onMounted(() => {
    if (immediate) query()
  })

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
