import { ButtonProps, ElMessageBoxOptions } from 'element-plus'
import { VNode } from 'vue'
import { FormDialogProps } from '../FormDialog'

export enum Commands {
  post,
  put,
  delete,
  export,
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

export interface CommandExportItem extends CommandBaseItem {
  command?: Commands.export
  options?: null
}

export type CommandItem = CommandBoxItem | CommandDialogItem | CommandExportItem

export type CommandOpt<T> = CommandItem[] | ((row: T) => CommandItem[])
