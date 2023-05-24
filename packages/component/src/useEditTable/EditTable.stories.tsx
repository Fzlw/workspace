import type { Meta, StoryObj } from '@storybook/vue3'
import { onMounted } from 'vue'
import React from 'react'

import { OneTable as Table } from '../Table'
import { useEditTable } from './index'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Example/EditTable',
  component: Table,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  args: { loading: false, height: 300 }, // default value
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const UseEditTable: Story = {
  args: {},
  render: () => {
    return {
      components: { Table },
      setup() {
        type Row = { date: string; name: string; address: string }

        const { tableState, handleQuery, editRow, cancelRow, delRow, saveRow, rowIsEditing, addRow, getChangedRows } =
          useEditTable<Row>({
            columns: [
              { label: 'Date', prop: 'date', rFormat: 0, rType: 'date' },
              { label: 'Name', prop: 'name' },
              {
                label: 'Address',
                prop: 'address',
                formatter(_row, _column, _cellValue, _index) {
                  return 'addrrrrr001'
                },
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
                    </div>
                  )
                },
              },
            ],
            query() {
              return new Promise((r) => {
                setTimeout(() => {
                  const list = [
                    { date: new Date().toString(), name: 'name', address: Math.random().toString() },
                    { date: new Date().toString(), name: 'name', address: Math.random().toString() },
                    { date: new Date().toString(), name: 'name', address: Math.random().toString() },
                    { date: new Date().toString(), name: 'name', address: Math.random().toString() },
                    { date: new Date().toString(), name: 'name', address: Math.random().toString() },
                    { date: new Date().toString(), name: 'name', address: Math.random().toString() },
                    { date: new Date().toString(), name: 'name', address: Math.random().toString() },
                    { date: new Date().toString(), name: 'name', address: Math.random().toString() },
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
        <button @click="addRow()">addRow</button>
        <button @click="getChanged">getChangedRows</button>
        <Table v-bind="tableState" height=300 />
      `,
    }
  },
}
