import type { Meta, StoryObj } from '@storybook/vue3'
import { onMounted } from 'vue'
import React from 'react'

import { OneTable as Table } from './index'
import { useTable } from '../useTable'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Example/Table',
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
export const BasicTable: Story = {
  args: {
    data: [
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ],
    columns: [
      { label: 'Date', prop: 'date' },
      { label: 'Name', prop: 'name' },
      { label: 'Address', prop: 'address' },
    ],
  },
}

/**
 * 配合useTable使用
 */
export const UseTable: Story = {
  args: { data: [], columns: [] },
  render: () => {
    return {
      components: { Table },
      setup() {
        type Data = { date: string; name: string; address: string }

        const { tableState, handleQuery, handleNext } = useTable<Data>({
          columns: [
            { label: 'Date', prop: 'date', rFormat: 0 },
            { label: 'Name', prop: 'name' },
            {
              label: 'Address',
              prop: 'address',
              formatter(_row, _column, _cellValue, _index) {
                return <div>addrrrrr</div>
              },
            },
          ],
          query() {
            return new Promise((r) => {
              setTimeout(() => {
                const list = [
                  { date: new Date().toString(), name: '', address: Math.random().toString() },
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

        return { tableState, handleNext }
      },
      template: `
        <div>
            当前已获取数据总条数{{ tableState.data.length }}
            <button @click="handleNext">加载下一页</button>
        </div>
        <Table v-bind="tableState" height=300 />
      `,
    }
  },
}
