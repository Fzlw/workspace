import { FormProps } from 'element-plus'
import { Column, ExpandColumn } from '../useColumn'
import { FormColumn } from '../Form'
import { TableColumn, OneTableProps } from '../Table'

export type VerifyEditTableColumn<T> = ExpandColumn<Column, FormColumn & TableColumn<T>>

export interface VerifyEditTableProps<T = unknown> extends Omit<OneTableProps<T>, 'columns'> {
  model: FormProps['model']
  columns: VerifyEditTableColumn<T>
}
