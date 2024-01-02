import type { Meta, StoryObj } from '@storybook/vue3'
import { onMounted } from 'vue'
import React from 'react'

import { OneTable as Table, useEditTable } from '../src'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
/**
 * 可编辑表格基于 OneTable 实现 搭配useEditTable使用即可实现可编辑表格
 * 不带有验证功能
 */
const meta = {
  title: 'Example/OneEditTable',
  component: Table,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const 可编辑表格: Story = {
  render: () => {
    return {
      components: { Table },
      setup() {
        type Row = { date: string; name: string; address: string }

        const {
          tableState,
          handleQuery,
          editRow,
          cancelRow,
          delRow,
          saveRow,
          rowIsEditing,
          addRow,
          getChangedRows,
          moveRow,
        } = useEditTable<Row>({
          columns: [
            { label: 'Date', prop: 'date', rFormat: 0, rType: 'date' },
            { label: 'Name', prop: 'name' },
            {
              label: 'Address',
              prop: 'address',
              elProps: {
                formatter(value) {
                  return value + '-'
                },
              },
            },
            {
              label: 'state',
              prop: 'state',
              editable: false,
              formatter(row) {
                return rowIsEditing(row) ? '编辑中' : '-'
              },
            },
            {
              label: 'opera',
              prop: '',
              editable: false,
              formatter(row) {
                return (
                  <div>
                    <button onClick={() => editRow(row)}>edit</button>
                    <button onClick={() => delRow(row)}>delete</button>
                    <button onClick={() => cancelRow(row)}>cancel</button>
                    <button onClick={() => saveRow(row)}>save</button>
                    <button onClick={() => moveRow(row, -1)}>move prev</button>
                    <button onClick={() => moveRow(row, 1)}>move next</button>
                    <button onClick={() => moveRow(row, 1, false)}>move to 2</button>
                  </div>
                )
              },
            },
          ],
          query() {
            return new Promise((r) => {
              setTimeout(() => {
                const list = [
                  { date: new Date().toString(), name: 'name1', address: Math.random().toString() },
                  { date: new Date().toString(), name: 'name2', address: Math.random().toString() },
                  { date: new Date().toString(), name: 'name3', address: Math.random().toString() },
                  { date: new Date().toString(), name: 'name4', address: Math.random().toString() },
                  { date: new Date().toString(), name: 'name5', address: Math.random().toString() },
                  { date: new Date().toString(), name: 'name6', address: Math.random().toString() },
                  { date: new Date().toString(), name: 'name7', address: Math.random().toString() },
                  { date: new Date().toString(), name: 'name8', address: Math.random().toString() },
                ]

                r({ list, total: 100 })
              }, 1000)
            })
          },
        })

        onMounted(handleQuery)

        const getChanged = () => {
          console.log(getChangedRows())
        }

        return { tableState, addRow, getChanged }
      },
      template: `
        <button @click="addRow()">新增到末尾</button>
        <button @click="addRow(null, 2)">新增到第3</button>
        <button @click="addRow(null, -3)">新增到倒数第3</button>
        <button @click="getChanged">获取修改过的行</button>
        <Table v-bind="tableState" height=300 />
      `,
    }
  },
}
