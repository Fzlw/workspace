import { h, Fragment } from 'vue'
import { ElButton } from 'element-plus'
import { CommandOpt } from './types'
import { UseTableColumn } from '../useTable'

export const useCommand = <T>(
  commands: CommandOpt<T>,
  cb: (...args: any[]) => void,
  column?: UseTableColumn<T>
): UseTableColumn<T> => {
  return {
    prop: 'operation',
    label: '操作',
    align: 'center',
    ...column,
    formatter(row) {
      const cs = Array.isArray(commands) ? commands : commands(row)

      return h(
        Fragment,
        cs.map((i) => {
          return h(
            ElButton,
            {
              ...i,
              key: i.command,
              onClick: (e) => (i.onClick ? i.onClick(row, i, e) : cb(i.command, row, i.options)),
            },
            { default: i.default ?? (() => i.label) }
          )
        })
      )
    },
  }
}
