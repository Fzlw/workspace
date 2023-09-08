import { Pagination } from '../types'
import { LoadMode } from '../Table'
import { UseTableColumn, UseTableOptions, useTable } from '../useTable'
import { UseFormOptions, useForm } from '../useForm'
import { useFormDialog, UseFormDialogOptions } from '../useFormDialog'
import { BaseResult, LayoutCommand, CommandItem } from '../types'
import { unref } from 'vue'
import { ElMessageBox } from 'element-plus'
import { useCommand } from './useCommand'
import { noop } from 'lodash-es'

export interface UseLayoutOptions<T, Q, K> {
  get: (query: Q, p: Pagination) => BaseResult<T> | Promise<BaseResult<T>>
  post?: UseFormDialogOptions<T>['post']
  put?: UseFormDialogOptions<T>['post']
  delete?: (row: T) => any
  export?: (query: Q, p: Pagination) => any
  commands?: CommandItem[]
  columns: UseTableOptions<T, K>['columns']
  pagination?: Pagination
  mode?: LoadMode
  queryColumns: UseFormOptions<T>['columns']
  formColumns: UseFormOptions<T>['columns']
  queryState?: Partial<Q>
}

export function useLayout<T extends object, Q extends object = object, K extends UseTableColumn<T> = UseTableColumn<T>>(
  opts: UseLayoutOptions<T, Q, K>
) {
  const {
    get,
    post,
    put,
    delete: dM,
    export: eM,
    columns,
    mode,
    pagination: pa,
    queryColumns,
    formColumns,
    commands,
    queryState: qS,
  } = opts

  const command = (command: LayoutCommand, row?: Partial<T>) => {
    switch (command) {
      case LayoutCommand.post:
        formOpera.setModel(row ?? {}, true)
        formOpera.show({ title: '新增', onSubmit: () => formOpera.submit(post) })
        break

      case LayoutCommand.put:
        formOpera.setModel(row ?? {}, true)
        formOpera.show({ title: '修改', onSubmit: () => formOpera.submit(put) })
        break

      case LayoutCommand.delete:
        ElMessageBox.confirm('确定删除所选的数据吗？', '确认删除', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(() => dM?.(row as T))
        break

      case LayoutCommand.export:
        eM?.(unref(queryState.model), unref(pagination))
        break
    }
  }

  const renderCommand = useCommand()

  const { tableState, handleQuery, pagination } = useTable<T, K>({
    columns: commands ? columns.concat(renderCommand(commands, command) as K) : columns,
    mode: mode ?? LoadMode.single,
    query: (p) => get(unref(queryState.model), p),
    pagination: pa,
  })

  const { formState: queryState, ...queryOpera } = useForm<Q>({
    columns: queryColumns,
    initData: qS,
  })

  const query = () => {
    queryOpera.submit(() => handleQuery())
  }

  const { formDialogState, ...formOpera } = useFormDialog<T>({
    columns: formColumns,
    post: noop,
  })

  const resetQuery = () => queryOpera.setModel({}, true)

  return {
    tableState,
    queryState,
    formDialogState,
    pagination,

    query,
    command,

    setForm: formOpera.setModel,
    showDialog: formOpera.show,
    hideialog: formOpera.hide,
    resetQuery,
  }
}
