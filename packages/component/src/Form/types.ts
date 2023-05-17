import { FormItemProps, FormProps } from 'element-plus'
import { ExpandColumn, Column, NonModel } from '../useColumn'

export type FormColumn = ExpandColumn<Column, { formItemProps: Partial<FormItemProps> }>

export interface OneFormProps extends /* @vue-ignore */ Partial<FormProps> {
  model: NonModel
  columns: FormColumn[]
}
