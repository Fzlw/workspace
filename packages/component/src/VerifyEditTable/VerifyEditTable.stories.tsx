import type { Meta, StoryObj } from '@storybook/vue3'
import { onMounted } from 'vue'
import React from 'react'

import { OneVerifyEditTable as Table } from './index'
import { useVerifyEditTable } from '../useVerifyEditTable'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Example/VerifyEditTable',
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
export const UseVerifyEditTable: Story = {
  args: {},
  render: () => {
    return {
      components: { Table },
      setup() {
        type Row = { date: string; name: string; address: string }

        const { tableState, handleQuery, editRow, cancelRow, delRow, saveRow, rowIsEditing } = useVerifyEditTable<Row>({
          columns: [
            { label: 'Date', prop: 'date', rFormat: 0, rType: 'date' },
            { label: 'Name', prop: 'name', requiredMsg: 'name必填' },
            {
              label: 'Address',
              prop: 'address',
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
                    <div onClick={() => editRow(row)}>edit</div>
                    <div onClick={() => delRow(row)}>delete</div>
                    <div onClick={() => cancelRow(row)}>cancel</div>
                    <div onClick={() => saveRow(row)}>save</div>
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

        return { tableState }
      },
      template: `
        <Table v-bind="tableState" height=300 />
      `,
    }
  },
}
