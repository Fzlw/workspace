import type { Meta, StoryObj } from '@storybook/vue3'
import { nextTick, onMounted } from 'vue'
import React from 'react'
import { ElPagination } from 'element-plus'

import { OneTable as Table, useTable, LoadMode, Format } from '../src'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
/**
 * 完全基于 el-table 组件 除列举的props外 其他$attrs会透传至el-table
 * selection-change事件会失效 取而代之可以直接使用 v-model:selected
 * https://element-plus.org/zh-CN/component/table.html
 */
const meta = {
  title: 'Example/OneTable',
  component: Table,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    loading: {
      description: '组件加载状态 通过vLoading指令实现',
      defaultValue: { summary: false },
      control: {
        type: 'boolean',
      },
    },
    columns: {
      description: '列信息',
      defaultValue: { summary: 'TableColumn<T>[]' },
      control: {
        type: 'object',
      },
    },
    selected: {
      description: 'table组件在可选择模式下当前选择的项',
      defaultValue: { summary: 'T[]' },
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const 基础用例: Story = {
  args: {
    height: 300,
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
 * 内部会自动生成符合OneTable组件props的响应式状态 同时返回一个符合el-pagination组件props的分页状态
 */
export const 配合useTable使用: Story = {
  render: () => {
    return {
      components: { Table, ElPagination },
      setup() {
        type Data = { date: string; name: string; address: string }

        const { tableState, handleQuery, pagination } = useTable<Data>({
          columns: [
            { label: 'Date', prop: 'date', rFormat: Format.dateTime },
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
                const list = new Array(20).fill({
                  date: new Date().toString(),
                  name: 'name',
                  address: Math.random().toString(),
                })

                r({ list, total: 100 })
              }, 1000)
            })
          },
        })

        onMounted(handleQuery)

        return { tableState, pagination }
      },
      template: `
        <Table v-bind="tableState" height=300 />
        <ElPagination v-bind="pagination" />
      `,
    }
  },
}

export const 自定义分页参数: Story = {
  render: () => {
    return {
      components: { Table, ElPagination },
      setup() {
        type Data = { date: string; name: string; address: string }

        const { tableState, handleQuery, pagination } = useTable<Data>({
          columns: [
            { label: 'Date', prop: 'date', rFormat: Format.dateTime },
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
                const list = new Array(10).fill({
                  date: new Date().toString(),
                  name: 'name',
                  address: Math.random().toString(),
                })

                r({ list, total: 100 })
              }, 1000)
            })
          },
          pagination: {
            pageSize: 10,
            pageSizes: [10, 20],
          },
        })

        onMounted(handleQuery)

        return { tableState, pagination }
      },
      template: `
        <Table v-bind="tableState" height=300 />
        <ElPagination v-bind="pagination" />
      `,
    }
  },
}

/**
 * 通过 `el-table-infinite-scroll` 实现 然后useTable代理onNext实现
 */
export const 无限滚动列表: Story = {
  render: () => {
    return {
      components: { Table },
      setup() {
        type Data = { date: string; name: string; address: string }

        const { tableState, handleQuery } = useTable<Data>({
          columns: [
            { label: 'Date', prop: 'date', rFormat: Format.dateTime },
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
                const list = new Array(10).fill({
                  date: new Date().toString(),
                  name: 'name',
                  address: Math.random().toString(),
                })

                r({ list, total: 100 })
              }, 1000)
            })
          },
          mode: LoadMode.infinite,
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

export const 可选择列表: Story = {
  render: () => {
    return {
      components: { Table, ElPagination },
      setup() {
        type Data = { date: string; name: string; address: string }

        const { tableState, handleQuery, pagination } = useTable<Data>({
          columns: [
            { type: 'selection', width: 40 },
            { label: 'Date', prop: 'date', rFormat: Format.dateTime },
            { label: 'Name', prop: 'name' },
            { label: 'Address', prop: 'address' },
          ],
          query() {
            return new Promise((r) => {
              setTimeout(() => {
                const list = new Array(10).fill(0).map(() => ({
                  date: new Date().toString(),
                  name: 'name',
                  address: Math.random().toString(),
                }))

                r({ list, total: 100 })
              }, 1000)
            })
          },
        })

        onMounted(handleQuery)

        return { tableState, pagination }
      },
      template: `
        <div>当前已选择数：{{ tableState.selected.length }}</div>
        <Table v-bind="tableState" height=300 />
        <ElPagination v-bind="pagination" />
      `,
    }
  },
}

/**
 * 打开控制台查看
 */
export const 获取ElTable组件实例: Story = {
  render: () => {
    return {
      components: { Table },
      setup() {
        type Data = { date: string; name: string; address: string }

        const { tableState, handleQuery, table } = useTable<Data>({
          columns: [
            { label: 'Date', prop: 'date', rFormat: Format.dateTime },
            { label: 'Name', prop: 'name' },
            { label: 'Address', prop: 'address' },
          ],
          query() {
            return new Promise((r) => {
              setTimeout(() => {
                const list = new Array(10).fill(0).map(() => ({
                  date: new Date().toString(),
                  name: 'name',
                  address: Math.random().toString(),
                }))

                r({ list, total: 100 })
              }, 1000)
            })
          },
        })

        onMounted(handleQuery)
        onMounted(() => {
          nextTick(() => {
            console.log('组件实例：', table.value)
          })
        })

        return { tableState }
      },
      template: `
        <Table v-bind="tableState" height=300 />
      `,
    }
  },
}

export const 可隐藏Table列: Story = {
  render: () => {
    return {
      components: { Table },
      setup() {
        type Data = { date: string; name: string; address: string }

        const { tableState, handleQuery, toggleColumn } = useTable<Data>({
          columns: [
            { label: 'Date', prop: 'date', rFormat: Format.dateTime },
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
                const list = new Array(20).fill({
                  date: new Date().toString(),
                  name: 'name',
                  address: Math.random().toString(),
                })

                r({ list, total: 100 })
              }, 1000)
            })
          },
        })

        onMounted(handleQuery)

        return { tableState, toggleColumn }
      },
      template: `
        <Table v-bind="tableState" height=300 />
        <button @click="() => toggleColumn('name', false)">隐藏Name列</button>
        <button @click="() => toggleColumn('name', true)">显示Name列</button>
        <button @click="() => toggleColumn('name')">显示/隐藏Name列</button>
      `,
    }
  },
}
