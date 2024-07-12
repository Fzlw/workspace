import { ButtonProps, DrawerProps } from 'element-plus'

export type ElDrawerProps = Partial<DrawerProps>

export type FormDrawerProps = ElDrawerProps & {
  noText?: string
  okText?: string
  noProps?: ButtonProps
  okProps?: ButtonProps
}
