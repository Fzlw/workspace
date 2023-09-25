import { ElDialog, ButtonProps } from 'element-plus'

export type ElDialogProps = InstanceType<typeof ElDialog>['$props']

export type FormDialogProps = ElDialogProps & {
  noText?: string
  okText?: string
  noProps?: ButtonProps
  okProps?: ButtonProps
}
