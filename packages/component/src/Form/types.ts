import { FormItemProps, FormProps } from 'element-plus'
import { CSSProperties, HTMLAttributes } from 'vue'
import { ExpandColumn, Column, NonModel } from '../useColumn'

export type FormColumn = ExpandColumn<
  Column,
  { formItemProps: Partial<FormItemProps> & { class?: HTMLAttributes['class']; style?: CSSProperties } }
>

export interface OneFormProps extends /* @vue-ignore */ Partial<FormProps> {
  model: NonModel
  columns: FormColumn[]
}
