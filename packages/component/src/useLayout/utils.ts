import { isUndefined } from 'lodash-es'
import { Commands, CommandsAndString, CustomOptions } from './types'
import { UseLayoutColumn } from './useLayout'

export function cmdIn(cmd: CommandsAndString, arr?: CommandsAndString | CommandsAndString[]) {
  if (isUndefined(arr)) return void 0
  if (Array.isArray(arr)) return arr.includes(cmd)

  return cmd === arr
}

export function getColumnMap(columns: UseLayoutColumn[], cmd: Commands, customCmd: CustomOptions['cmd']) {
  const columnMap: Record<number, Record<string, unknown>> = {}
  const cmdIsCustom = cmd === Commands.custom

  for (let i = 0, len = columns.length; i < len; i++) {
    const column = columns[i]
    const colCmd = cmdIsCustom ? customCmd : cmd
    const disabled = cmdIn(colCmd, column.disabledType)
    const show = cmdIn(colCmd, column.showType)
    const hide = cmdIn(colCmd, column.hiddenType)
    const hidden = isUndefined(show) ? hide : !show

    columnMap[i] = {
      ...(!isUndefined(disabled) && { disabled }),
      ...(!isUndefined(hidden) && { hidden }),
    }
  }

  return columnMap
}
