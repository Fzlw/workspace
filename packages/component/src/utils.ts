import { FormInstance } from 'element-plus'
import { ChainMode } from './types'

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
