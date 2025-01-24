import { ElMessageBoxOptions } from 'element-plus'
import { FormDialogProps } from '../FormDialog'
import { FormDrawerProps } from '../FormDrawer'

export enum Commands {
  post,
  put,
  delete,
  export,
  postByDrawer,
  putByDrawer,
  custom,
}

export type CommandsAndString = Commands | string

export enum CommandRType {
  none,
  form,
  drawer,
  afterForm,
  afterDrawer,
  messageBox,
}

export interface CommandRTypeOptions {
  [CommandRType.none]: null
  [CommandRType.form]: FormDialogProps
  [CommandRType.afterForm]: FormDialogProps
  [CommandRType.drawer]: FormDrawerProps
  [CommandRType.afterDrawer]: FormDrawerProps
  [CommandRType.messageBox]: ElMessageBoxOptions
}

export type CustomOptions<T extends CommandRType = CommandRType> = CommandRTypeOptions[T] & {
  rType: T
  cmd: string
}

export type CommandOptions<T extends CommandRType = CommandRType> = {
  [Commands.post]: FormDialogProps
  [Commands.postByDrawer]: FormDrawerProps
  [Commands.put]: FormDialogProps
  [Commands.putByDrawer]: FormDrawerProps
  [Commands.delete]: ElMessageBoxOptions
  [Commands.export]: null
  [Commands.custom]: CustomOptions<T>
}

export const cmdToRType: Record<Commands, CommandRType> = {
  [Commands.post]: CommandRType.form,
  [Commands.put]: CommandRType.form,
  [Commands.postByDrawer]: CommandRType.drawer,
  [Commands.putByDrawer]: CommandRType.drawer,
  [Commands.delete]: CommandRType.messageBox,
  [Commands.export]: CommandRType.none,
  [Commands.custom]: CommandRType.none,
}

export const defaultCmdTitle: Record<Commands, string> = {
  [Commands.post]: '新增',
  [Commands.put]: '编辑',
  [Commands.postByDrawer]: '新增',
  [Commands.putByDrawer]: '编辑',
  [Commands.delete]: '确认删除',
  [Commands.export]: '',
  [Commands.custom]: '',
}

export const mixedKey: Record<Commands, string> = {
  [Commands.post]: 'posting',
  [Commands.put]: 'putting',
  [Commands.postByDrawer]: 'posting',
  [Commands.putByDrawer]: 'putting',
  [Commands.delete]: 'deleting',
  [Commands.export]: 'exporting',
  [Commands.custom]: '',
}

export interface LayoutT {
  [key: string]: any
}
