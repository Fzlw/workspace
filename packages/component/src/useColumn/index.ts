import { h, Slots, toRaw } from 'vue'
import {
  FormProps,
  ElInput,
  ElInputNumber,
  ElDatePicker,
  ElSelect,
  ElOption,
  ElRadio,
  ElRadioGroup,
  ElCheckboxGroup,
  ElCheckbox,
} from 'element-plus'
import {
  NumberColumn,
  DateColumn,
  SelectColumn,
  RadioColumn,
  CheckboxColumn,
  InputColumn,
  Column,
  CustomColumn,
  BaseColumn,
  RemoteColumn,
} from './types'
import { OneRemoteSelect } from '../RemoteSelect'
import { isUndefined, isEmpty } from 'lodash-es'
import { formatOption, valueMapTo } from '../utils'

export type NonRType = NonNullable<Column['rType']>
export type NonModel = NonNullable<FormProps['model']>
export type RenderColumn<T extends BaseColumn> = (model: NonModel, i: T, slots?: Slots) => JSX.Element | null

export const useColumn = () => {
  const renderInput: RenderColumn<InputColumn> = (model, i) => {
    const { formatter: _f, elProps = null, ...other } = i

    return h(ElInput, {
      ...other,
      ...elProps,
      modelValue: model[i.prop],
      'onUpdate:modelValue': (value) => {
        model[i.prop] = value
      },
    })
  }

  const renderNumber: RenderColumn<NumberColumn> = (model, i) => {
    return h(ElInputNumber, {
      ...i,
      modelValue: model[i.prop],
      'onUpdate:modelValue': (value) => {
        model[i.prop] = value
      },
    })
  }

  const renderDate: RenderColumn<DateColumn> = (model, i) => {
    return h(ElDatePicker, {
      ...i,
      modelValue: model[i.prop],
      'onUpdate:modelValue': (value) => {
        model[i.prop] = value
      },
    })
  }

  const renderSelect: RenderColumn<SelectColumn> = (model, i) => {
    const { labelKey = 'label', valueMap, ...other } = i
    const { valueKey = 'value' } = other

    return h(
      ElSelect,
      {
        ...other,
        modelValue: model[i.prop],
        'onUpdate:modelValue': (value) => {
          model[i.prop] = value

          if (!isEmpty(valueMap)) {
            if (Array.isArray(value)) {
              valueMapTo(
                model,
                i.options.filter((o) => value.includes(o[valueKey])),
                valueMap
              )
            } else {
              valueMapTo(
                model,
                i.options.find((o) => o[valueKey] === value),
                valueMap
              )
            }
          }
        },
      },
      {
        default: () =>
          i.options.map((option, index) => {
            return h(ElOption, {
              ...option,
              value: option[valueKey],
              label: option[labelKey as keyof typeof option] as string,
              key: index,
            })
          }),
      }
    )
  }

  const renderRadio: RenderColumn<RadioColumn> = (model, i) => {
    return h(
      ElRadioGroup,
      {
        ...i,
        modelValue: model[i.prop],
        'onUpdate:modelValue': (value) => {
          model[i.prop] = value
        },
      },
      {
        default: () =>
          i.options.map((option, index) => {
            return h(
              ElRadio,
              {
                label: option.value,
                key: index,
              },
              { default: () => option.label }
            )
          }),
      }
    )
  }

  const renderCheckbox: RenderColumn<CheckboxColumn> = (model, i) => {
    return h(
      ElCheckboxGroup,
      {
        ...i,
        modelValue: model[i.prop],
        'onUpdate:modelValue': (value) => {
          model[i.prop] = value
        },
      },
      {
        default: () =>
          i.options.map((option, index) => {
            return h(
              ElCheckbox,
              {
                label: option.value,
                key: index,
              },
              { default: () => option.label }
            )
          }),
      }
    )
  }

  const renderCustom: RenderColumn<CustomColumn> = (model, i, slots) => {
    const scope = { model }

    return (slots?.[i.prop]?.(scope) ?? i.render?.(scope) ?? null) as any
  }

  const renderRemote: RenderColumn<RemoteColumn> = (model, i) => {
    const { valueMap, ...other } = i
    const modelValue = model[i.prop]
    const rawModel = toRaw(model)
    const vK = i.prop ?? 'value'
    const lK = i.labelKey ?? 'label'
    const options = isUndefined(modelValue)
      ? void 0
      : Array.isArray(modelValue)
      ? modelValue.map((val, j) =>
          formatOption({ ...rawModel, [vK]: val, [lK]: rawModel[lK]?.[j] }, i.prop, i.labelKey, i.renderLabel)
        )
      : [formatOption(rawModel, i.prop, i.labelKey, i.renderLabel)]

    return h(OneRemoteSelect, {
      defaultOptions: options,
      ...other,
      modelValue: model[i.prop],
      'onUpdate:modelValue': (value: any) => {
        model[i.prop] = value
      },
      onChangeMap(value: any | any[]) {
        valueMapTo(model, value, valueMap)
      },
    })
  }

  const renderMap: Record<NonNullable<Column['rType']>, RenderColumn<any>> = {
    number: renderNumber,
    date: renderDate,
    select: renderSelect,
    checkbox: renderCheckbox,
    radio: renderRadio,
    custom: renderCustom,
    text: renderInput,
    remote: renderRemote,
  }

  const renderColumn = (model: NonModel, i: Column, slots?: Slots) => {
    const type = i.rType || 'text'
    const r = renderMap[type] ?? renderMap.text

    return r(model, i, slots)
  }

  return renderColumn
}

export * from './types'
