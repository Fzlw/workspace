import type { Meta, StoryObj } from '@storybook/vue3'
import { onMounted } from 'vue'
import React from 'react'

import { OneVerifyEditTable as Table, useVerifyEditTable } from '../src'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
/**
 * 带验证条件的可编辑的表格
 * 基于 el-form 和 OneTable 实现 $attrs会透传至OneTable
 */
const meta = {
  title: 'Example/OneVerifyEditTable',
  component: Table,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    columns: {
      description: '列信息',
      defaultValue: { summary: 'VerifyEditTableColumn<T>[]' },
      control: {
        type: 'object',
      },
    },
    model: {
      description: '表单数据对象(同el-form)',
      defaultValue: { summary: 'object' },
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const 基础用例: Story = {
  args: {},
  render: () => {
    return {
      components: { Table },
      setup() {
        type Row = { date: string; name: string; address: string }

        const { verifyTableState, handleQuery, editRow, cancelRow, delRow, saveRow, rowIsEditing, addRow } =
          useVerifyEditTable<Row>({
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
                  const list = new Array(10)
                    .fill(0)
                    .map(() => ({ date: new Date().toString(), name: 'name', address: Math.random().toString() }))

                  r({ list, total: 100 })
                }, 1000)
              })
            },
          })

        onMounted(handleQuery)

        return { tableState: verifyTableState, addRow }
      },
      template: `
        <button @click="addRow({})">add</button>
        <Table v-bind="tableState" height=300 />
      `,
    }
  },
}
