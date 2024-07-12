import { ButtonProps, ElMessageBoxOptions } from 'element-plus'
import { VNode } from 'vue'
import { FormDialogProps } from '../FormDialog'
import { FormDrawerProps } from '../FormDrawer'

export enum Commands {
  post,
  put,
  delete,
  export,
  postByDrawer,
  putByDrawer,
}

export interface CommandBaseItem extends Partial<ButtonProps> {
  label?: string
  default?: () => VNode | string
  onClick?: <T>(row: T, column: CommandItem, evt: MouseEvent) => void
}

export interface CommandBoxItem extends CommandBaseItem {
  command?: Commands.delete
  options?: ElMessageBoxOptions
}

export interface CommandDialogItem extends CommandBaseItem {
  command?: Commands.post | Commands.put
  options?: FormDialogProps
}

export interface CommandDrawerItem extends CommandBaseItem {
  command?: Commands.postByDrawer | Commands.putByDrawer
  options?: FormDrawerProps
}

export interface CommandExportItem extends CommandBaseItem {
  command?: Commands.export
  options?: null
}

export type CommandItem = CommandBoxItem | CommandDialogItem | CommandExportItem | CommandDrawerItem

export type CommandOpt<T> = CommandItem[] | ((row: T) => CommandItem[])

export type CommandOptions = {
  [Commands.post]: FormDialogProps
  [Commands.postByDrawer]: FormDrawerProps
  [Commands.put]: FormDialogProps
  [Commands.putByDrawer]: FormDrawerProps
  [Commands.delete]: ElMessageBoxOptions
  [Commands.export]: null
}
