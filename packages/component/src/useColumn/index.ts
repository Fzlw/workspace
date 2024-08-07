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
  ElSwitch,
  ElColorPicker,
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
  SwitchColumn,
  CustomScope,
  CheckboxGroupColumn,
  ColorColumn,
} from './types'
import { OneRemoteSelect } from '../RemoteSelect'
import { isEmpty, get, set } from 'lodash-es'
import { formatOption, valueMapTo, isUndefinedOrNullChar } from '../utils'

export type NonRType = NonNullable<Column['rType']>
export type NonModel = NonNullable<FormProps['model']>
export type RenderColumn<T extends BaseColumn> = (model: NonModel, i: T, slots?: Slots) => JSX.Element | null

const renderInput: RenderColumn<InputColumn> = (model, i) => {
  const { formatter: _f, elProps = null, ...other } = i

  return h(
    ElInput,
    {
      ...other,
      ...elProps,
      modelValue: get(model, i.prop),
      'onUpdate:modelValue': (value) => {
        set(model, i.prop, value)
      },
    },
    i.slots
  )
}

const renderNumber: RenderColumn<NumberColumn> = (model, i) => {
  return h(ElInputNumber, {
    ...i,
    modelValue: get(model, i.prop),
    'onUpdate:modelValue': (value) => {
      set(model, i.prop, value)
    },
  })
}

const renderDate: RenderColumn<DateColumn> = (model, i) => {
  return h(
    ElDatePicker,
    {
      ...i,
      modelValue: get(model, i.prop),
      'onUpdate:modelValue': (value) => {
        set(model, i.prop, value)
      },
    },
    i.slots
  )
}

const renderSelect: RenderColumn<SelectColumn> = (model, i) => {
  const { labelKey = 'label', valueMap, ...other } = i
  const { valueKey = 'value' } = other

  return h(
    ElSelect,
    {
      ...other,
      modelValue: get(model, i.prop),
      'onUpdate:modelValue': (value) => {
        set(model, i.prop, value)

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
      ...i.slots,
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
      modelValue: get(model, i.prop),
      'onUpdate:modelValue': (value) => {
        set(model, i.prop, value)
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
  if (Array.isArray(i.options)) {
    return renderCheckboxGroup(model, i as unknown as CheckboxGroupColumn)
  }

  return h(
    ElCheckbox,
    {
      ...i,
      // FIXME: 设置为 undefined 时 UI 不一致
      modelValue: get(model, i.prop, false),
      'onUpdate:modelValue': (value) => {
        set(model, i.prop, value)
      },
    },
    i.slots
  )
}

const renderCheckboxGroup: RenderColumn<CheckboxGroupColumn> = (model, i) => {
  return h(
    ElCheckboxGroup,
    {
      ...i,
      modelValue: get(model, i.prop),
      'onUpdate:modelValue': (value) => {
        set(model, i.prop, value)
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
  const scope: CustomScope = { model, state: i.state ?? {} }

  return (slots?.[i.prop]?.(scope) ?? i.render?.(scope) ?? null) as any
}

const renderRemote: RenderColumn<RemoteColumn> = (model, i) => {
  const { valueMap, ...other } = i
  const modelValue = get(model, i.prop)
  const rawModel = toRaw(model)
  const vK = i.prop ?? 'value'
  const lK = i.labelKey ?? 'label'
  const options = isUndefinedOrNullChar(modelValue)
    ? void 0
    : Array.isArray(modelValue)
    ? modelValue.map((val, j) =>
        formatOption({ ...rawModel, [vK]: val, [lK]: rawModel[lK]?.[j] }, i.prop, i.labelKey, i.renderLabel)
      )
    : [formatOption(rawModel, i.prop, i.labelKey, i.renderLabel)]

  return h(OneRemoteSelect, {
    defaultOptions: options,
    ...other,
    modelValue,
    'onUpdate:modelValue': (value: any) => {
      set(model, i.prop, value)
    },
    onChangeMap(value: any | any[]) {
      valueMapTo(model, value, valueMap)
    },
  })
}

const renderSwitch: RenderColumn<SwitchColumn> = (model, i) => {
  return h(
    ElSwitch,
    {
      ...i,
      modelValue: get(model, i.prop),
      'onUpdate:modelValue': (value) => {
        set(model, i.prop, value)
      },
    },
    i.slots
  )
}

const renderColorPicker: RenderColumn<ColorColumn> = (model, i) => {
  return h(ElColorPicker, {
    ...i,
    modelValue: get(model, i.prop),
    'onUpdate:modelValue': (value) => {
      set(model, i.prop, value)
    },
  })
}

const renderMap: Record<NonNullable<Column['rType']>, RenderColumn<any>> = {
  number: renderNumber,
  date: renderDate,
  select: renderSelect,
  checkbox: renderCheckbox,
  checkboxGroup: renderCheckboxGroup,
  radio: renderRadio,
  custom: renderCustom,
  text: renderInput,
  remote: renderRemote,
  switch: renderSwitch,
  color: renderColorPicker,
}

/**
 * 列信息里 prop 支持路径参数
 * 例: column.x => { column: { x: 1 } }
 */
export const renderColumn = (model: NonModel, i: Column, slots?: Slots) => {
  const type = i.rType || 'text'
  const r = renderMap[type] ?? renderMap.text

  return r(model, i, slots)
}

// NOTE: 兼容老版本的使用
export const useColumn = () => renderColumn

export * from './types'
