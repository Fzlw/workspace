import { h, Fragment } from 'vue'
import { ElButton } from 'element-plus'
import { CommandItem, LayoutCommand } from '../types'
import { UseTableColumn } from '../useTable'

export const useCommand = () => {
  const renderCommand = <T>(
    commands: CommandItem[],
    cb: (command: LayoutCommand, row?: Partial<T>) => void
  ): UseTableColumn<T> => {
    return {
      prop: '',
      label: '操作',
      align: 'center',
      formatter(row) {
        return h(
          Fragment,
          commands.map((i) => {
            return h(ElButton, { ...i, key: i.command, onClick: () => cb(i.command, row) }, i.label)
          })
        )
      },
    }
  }

  return renderCommand
}
