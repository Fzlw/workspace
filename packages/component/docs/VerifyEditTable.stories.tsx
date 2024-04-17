import type { Meta, StoryObj } from '@storybook/vue3'
import { nextTick, onMounted } from 'vue'
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

        const { verifyTableState, handleQuery, editRow, cancelRow, delRow, saveRow, rowIsEditing, addRow, setColumn } =
          useVerifyEditTable<Row>({
            columns: [
              { label: 'Date', prop: 'date', rFormat: 0, rType: 'date' },
              { label: 'Name', prop: 'name', requiredMsg: 'name必填' },
              {
                label: 'Address',
                prop: 'address',
              },
              {
                label: 'Custom',
                prop: 'custom',
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
                  const onEdit = () => {
                    setColumn('custom', { editable: false })
                    editRow(row)
                  }
                  return (
                    <div>
                      <div onClick={onEdit}>edit</div>
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
                  const list = new Array(10).fill(0).map(() => ({
                    date: new Date().toString(),
                    name: 'name',
                    address: Math.random().toString(),
                    custom: '新增时可编辑',
                  }))

                  r({ list, total: 100 })
                }, 1000)
              })
            },
          })

        onMounted(handleQuery)

        const onAdd = () => {
          setColumn('custom', { editable: true })
          addRow({} as any)
        }

        return { tableState: verifyTableState, onAdd }
      },
      template: `
        <button @click="onAdd">add</button>
        <Table v-bind="tableState" height=300 />
      `,
    }
  },
}

export const 获取ElForm和ElTable组件实例: Story = {
  args: {},
  render: () => {
    return {
      components: { Table },
      setup() {
        type Row = { date: string; name: string; address: string }

        const { verifyTableState, handleQuery, editRow, cancelRow, delRow, saveRow, rowIsEditing, table, form } =
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
        onMounted(() => {
          nextTick(() => {
            console.log('组件实例：', table.value, form.value)
          })
        })

        return { tableState: verifyTableState }
      },
      template: `
        <Table v-bind="tableState" height=300 />
      `,
    }
  },
}
