import { ElDialog, ButtonProps } from 'element-plus'
import { CommandRType } from '../useLayout'

export type ElDialogProps = InstanceType<typeof ElDialog>['$props']

export type FormDialogProps = ElDialogProps & {
  noText?: string
  okText?: string
  noProps?: ButtonProps
  okProps?: ButtonProps
  rType?: CommandRType
}
