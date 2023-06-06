import { FormInstance } from 'element-plus'
import { uniqueId, isBoolean, isObject, isEmpty } from 'lodash-es'
import { ChainMode } from './types'
import { RemoteColumn, ValueMap, NonModel } from './useColumn'

/**
 * 对options选项进行map转换
 */
export const mapTo = <T>(list: { label: string; value: T }[], defaultValue = '-') => {
  const map = new Map<T, string>()

  list.forEach((i) => map.set(i.value, i.label))

  return (val?: T) => (val === void 0 ? defaultValue : map.get(val) ?? String(val) ?? defaultValue)
}

/**
 * 对多个表单进行验证
 * 并行模式：所有表单同时验证 均通过时才返回true
 * 逐行模式：前一个表单验证通过才开始验证下一个表单 其中一个验证不通过则停止验证并返回false
 */
export const chainForm = (forms: (FormInstance | undefined | null)[], mode = ChainMode.concurrency) => {
  if (mode === ChainMode.concurrency) {
    return Promise.all(
      forms.map((form) => {
        return new Promise<boolean>((resolve) => {
          if (!form) return resolve(true)

          form.validate((valid) => resolve(valid))
        })
      })
    ).then((res) => !res.includes(false))
  }

  return new Promise<boolean>((resolve) => {
    const iter = forms[Symbol.iterator]()
    const next = (): void => {
      const val = iter.next()

      if (val.done) return resolve(true)

      if (!val.value) return next()

      val.value.validate((valid) => {
        if (!valid) return resolve(false)

        next()
      })
    }

    next()
  })
}

export const formatOption = (i: any, vk?: string, lk?: string, rL?: RemoteColumn['renderLabel']) => {
  const isObj = isObject(i),
    vKey = vk ?? 'value',
    lKey = lk ?? 'label'

  let label, key

  if (rL) {
    label = rL(i)
  } else {
    label = isObj ? i?.[lKey as keyof typeof i] : i
  }

  const value = isObj ? i?.[vKey as keyof typeof i] : i

  if (vk) {
    key = i?.[vk]
  } else {
    key = isBoolean(value) || isObject(value) ? uniqueId() : value ?? uniqueId()
  }

  return {
    disabled: i?.disabled,
    label,
    value,
    key,
  }
}

export const valueMapTo = (model: NonModel, value: any | any[], valueMap?: ValueMap) => {
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
}
