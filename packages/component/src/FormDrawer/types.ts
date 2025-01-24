import { ButtonProps, DrawerProps } from 'element-plus'
import { CommandRType } from '../useLayout'

export type ElDrawerProps = Partial<DrawerProps>

export type FormDrawerProps = ElDrawerProps & {
  noText?: string
  okText?: string
  noProps?: ButtonProps
  okProps?: ButtonProps
  rType?: CommandRType
}
