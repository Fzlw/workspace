import { FormItemProps, FormProps } from 'element-plus'
import { CSSProperties } from 'vue'
import { ExpandColumn, Column, NonModel } from '../useColumn'

export type FormColumn = ExpandColumn<
  Column,
  { formItemProps: Partial<FormItemProps> & { class?: string; style?: CSSProperties } }
>

export interface OneFormProps extends /* @vue-ignore */ Partial<FormProps> {
  model: NonModel
  columns: FormColumn[]
}
