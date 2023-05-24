import { h, Slots } from 'vue'
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
import { isEmpty, isObject } from 'lodash-es'

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
    return h(
      ElSelect,
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
            return h(ElOption, {
              ...option,
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

    return h(OneRemoteSelect, {
      ...other,
      modelValue: model[i.prop],
      'onUpdate:modelValue': (value: any) => {
        model[i.prop] = value
      },
      onChangeMap(value: any | any[]) {
        if (!isEmpty(valueMap)) {
          for (const key in valueMap) {
            const modelKey = valueMap[key]

            if (Array.isArray(value)) {
              for (let i = 0, len = value.length; i < len; i++) {
                const val = value[i]
                const v = isObject(val) ? val[key as keyof object] : void 0

                if (Array.isArray(modelKey)) {
                  modelKey.forEach((k) => {
                    model[k] = (i === 0 ? [] : model[k]).concat(v)
                  })
                } else {
                  model[modelKey] = (i === 0 ? [] : model[modelKey]).concat(v)
                }
              }
            } else {
              const v = isObject(value) ? value[key as keyof object] : void 0

              if (Array.isArray(modelKey)) {
                modelKey.forEach((k) => (model[k] = v))
              } else {
                model[modelKey] = v
              }
            }
          }
        }
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
