import { Slots } from 'vue'
import {
  InputNumberInstance,
  DatePickerProps,
  InputInstance,
  ElSelect,
  ElOption,
  ElRadioGroup,
  ElRadio,
  ElCheckboxGroup,
  ElCheckbox,
  SwitchProps,
  ColorPickerProps,
  ColorPickerEmits,
} from 'element-plus'
import { Pagination, BaseResult } from '../types'

export type ExtProps<T, K extends keyof T = any> = Partial<Omit<T, K>>

export interface BaseColumn {
  prop: string
  slots?: Slots
}

export interface InputColumn extends BaseColumn, ExtProps<InputInstance['$props'], 'label'> {
  rType?: 'text'
  rows?: number
  elProps?: Partial<InputInstance['$props']>
}

export interface NumberColumn extends BaseColumn, ExtProps<InputNumberInstance['$props'], 'label'> {
  rType: 'number'
}

export interface DateColumn extends BaseColumn, Partial<DatePickerProps> {
  rType: 'date'
  onChange?: (val: DatePickerProps['modelValue']) => void
  onCalendarChange?: (val: [Date, null | Date]) => void
}

export type ValueMap = Record<string, string | string[]>
export type SelectProps = InstanceType<typeof ElSelect>['$props']
export type ElOptionProps = InstanceType<typeof ElOption>['$props']
export type SelectColumnOption = Omit<ElOptionProps, 'value'> & { value?: ElOptionProps['value']; [key: string]: any }
export interface SelectColumn extends BaseColumn, SelectProps {
  rType: 'select'
  options: SelectColumnOption[]
  labelKey?: string
  valueMap?: ValueMap
}

type ElRadioGroupProps = InstanceType<typeof ElRadioGroup>['$props']
type ElRadioProps = InstanceType<typeof ElRadio>['$props']
export interface RadioColumn extends BaseColumn, ElRadioGroupProps {
  rType: 'radio'
  options: (Omit<ElRadioProps, 'modelValue'> & { value: ElRadioProps['modelValue'] })[]
}

type CheckBoxGroupProps = InstanceType<typeof ElCheckboxGroup>['$props']
type ElCheckboxProps = InstanceType<typeof ElCheckbox>['$props']
export interface CheckboxColumn extends BaseColumn, ElCheckboxProps {
  rType: 'checkbox'
  options?: (Omit<ElCheckboxProps, 'modelValue'> & { value: ElCheckboxProps['modelValue'] })[]
}

export interface CheckboxGroupColumn extends BaseColumn, CheckBoxGroupProps {
  rType: 'checkboxGroup'
  options: (Omit<ElCheckboxProps, 'modelValue'> & { value: ElCheckboxProps['modelValue'] })[]
}

export type CustomScope<T = any> = { model: T; state: CustomColumn['state'] }

export interface CustomColumn extends BaseColumn {
  rType: 'custom'
  state?: Record<string, any>
  render?: (scope: CustomScope) => JSX.Element
}

export interface SwitchColumn extends BaseColumn, Partial<SwitchProps> {
  rType: 'switch'
}

export interface RemoteColumn extends BaseColumn, SelectProps {
  rType: 'remote'
  params?: Record<string, any>
  method: (
    query: [p: Pagination, keyword: string, params?: RemoteColumn['params']]
  ) => BaseResult<any> | Promise<BaseResult<any>>
  renderLabel?: (i: any) => ElOptionProps['label']
  valueMap?: ValueMap
  labelKey?: string
  noCache?: boolean
  defaultOptions?: ElOptionProps[]
}

export interface ColorColumn extends BaseColumn, Partial<ColorPickerProps> {
  rType: 'color'
  onChange?: ColorPickerEmits['change']
  onActiveChange?: ColorPickerEmits['activeChange']
}

export type Column =
  | InputColumn
  | NumberColumn
  | DateColumn
  | CustomColumn
  | SelectColumn
  | RadioColumn
  | CheckboxColumn
  | RemoteColumn
  | SwitchColumn
  | CheckboxGroupColumn
  | ColorColumn

export type ExpandColumn<T, K extends object> = T extends BaseColumn ? T & K : never

export type ExcludeColumn<T, K extends string | number | symbol> = T extends BaseColumn ? Omit<T, K> : never
