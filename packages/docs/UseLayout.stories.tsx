import type { Meta, StoryObj } from '@storybook/vue3'
import { ElPagination, ElMessage, ElButton } from 'element-plus'

import { Format, useLayout, OneTable, Commands, OneFormDialog, OneForm, CommandRType, LayoutT } from '@fzlw/eui-plus'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
/**
 * 提供基本的布局响应式状态
 * 包括查询、新增、修改、删除、导出
 * 不提供具体的页面布局组件
 */
const meta = {
  title: 'Example/useLayout',
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    get: {
      description: '查询接口',
    },
    post: {
      description: '新增接口',
    },
    put: {
      description: '修改接口',
    },
    delete: {
      description: '删除接口',
    },
    export: {
      description: '导出接口',
    },
    custom: {
      description: '自定义方法接口',
    },
    columns: {
      description: '列表展示项',
      defaultValue: { summary: '同useTable的columns' },
    },
    pagination: {
      description: '分页信息',
      defaultValue: { summary: '参考el-pagination' },
    },
    mode: {
      description: '单页/无限滚动',
      defaultValue: { summary: 'LoadMode.single' },
    },
    queryColumns: {
      description: '查询条件项',
      defaultValue: { summary: '同useForm的columns' },
    },
    queryState: {
      description: '默认查询条件',
      defaultValue: { summary: '同useForm的initData' },
    },
    formColumns: {
      description: '弹窗条件项',
      defaultValue: { summary: '同useFormDialog的columns' },
    },
    customColumns: {
      description: '弹窗或抽屉条件项',
      defaultValue: { summary: '同useFormDialog的columns' },
    },
    immediate: {
      description: '是否立即发起请求',
      defaultValue: true,
    },
    resetShouldQuery: {
      description: '重置查询表单时是否调用查询接口',
      defaultValue: true,
    },
    watchPageSize: {
      description: '是否在pageSize改变时调用查询接口',
      defaultValue: true,
    },
  },
} satisfies Meta

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
      components: { OneTable, ElPagination, OneFormDialog, ElButton, OneForm },
      setup() {
        type Row = { date: string; name: string; age: number }

        const { tableState, queryState, formDialogState, pagination, query, command, resetQuery } = useLayout<Row>({
          columns: [
            { label: 'name', prop: 'name' },
            { label: 'age', prop: 'age' },
            { label: 'date', prop: 'date', rFormat: Format.dateTime },
            {
              label: '操作',
              prop: 'opera',
              formatter(row) {
                return (
                  <div>
                    <ElButton
                      type='primary'
                      link
                      onClick={() =>
                        command(Commands.put, row, { title: '来编辑' })
                          .then(() => console.log('put then'))
                          .catch(() => console.log('put catch'))
                      }
                    >
                      编辑
                    </ElButton>
                    <ElButton
                      type='primary'
                      link
                      onClick={() =>
                        command(Commands.export, row)
                          .then(() => console.log('export then'))
                          .catch(() => console.log('export catch'))
                      }
                    >
                      导出
                    </ElButton>
                    <ElButton
                      type='danger'
                      link
                      onClick={() =>
                        command(Commands.delete, row, { title: '98765', type: 'error' })
                          .then(() => console.log('delete then'))
                          .catch(() => console.log('delete catch'))
                      }
                    >
                      删除
                    </ElButton>
                  </div>
                )
              },
            },
          ],
          queryColumns: [
            { label: 'name', prop: 'name' },
            { label: 'age', prop: 'age', rType: 'number' },
          ],
          formColumns: [
            { label: 'name', prop: 'name', requiredMsg: '必填啊', disabledType: [Commands.put] },
            { label: 'age', prop: 'age', requiredMsg: '必填啊', rType: 'number', min: 0, hiddenType: [Commands.post] },
            { label: 'date', prop: 'date', rType: 'date' },
          ],
          get(query, pa) {
            return new Promise((r) => {
              setTimeout(() => {
                const list = new Array(10).fill(0).map(() => ({
                  date: new Date().toString(),
                  name: `name-${pa.currentPage}-${query.name ?? ''}`,
                  age: Math.random(),
                }))

                r({ list, total: 100 })
              }, 1000)
            })
          },
          post(_model) {
            return new Promise<void>((r) => {
              setTimeout(() => {
                ElMessage.success('新增成功')
                r()
              }, 1000)
            })
          },
          put(_model) {
            return new Promise<void>((r) => {
              setTimeout(() => {
                ElMessage.success('修改成功')
                r()
              }, 1000)
            })
          },
          delete(_model) {
            return new Promise<void>((r) => {
              setTimeout(() => {
                ElMessage.success('删除成功')
                r()
              }, 1000)
            })
          },
          export(_model, _p) {
            return new Promise<void>((r) => {
              setTimeout(() => {
                ElMessage.success('导出成功')
                r()
              }, 1000)
            })
          },
          queryState: {
            age: 2,
          },
        })

        const onAdd = () =>
          command(Commands.post, null)
            .then(() => console.log('post then'))
            .catch(() => console.log('post catch'))
        const onExport = () =>
          command(Commands.export)
            .then(() => console.log('onExport then'))
            .catch(() => console.log('onExport catch'))

        return { tableState, queryState, formDialogState, pagination, onAdd, onExport, query, resetQuery }
      },
      template: `
        <ElButton @click="onAdd">新增</ElButton>
        <ElButton @click="onExport">导出</ElButton>
        <OneForm v-bind="queryState" />
        <ElButton @click="query">查询</ElButton>
        <ElButton @click="resetQuery">重置</ElButton>
        <OneTable v-bind="tableState" height=300 />
        <ElPagination v-bind="pagination" />
        <OneFormDialog v-bind="formDialogState" />
      `,
    }
  },
}

export const 默认隐藏项: Story = {
  args: {},
  render: () => {
    return {
      components: { OneTable, ElPagination, OneFormDialog, ElButton, OneForm },
      setup() {
        type Row = { name: number }

        const { formDialogState, command, formDialogOpera } = useLayout<Row>({
          formColumns: [
            {
              rType: 'select',
              label: 'name',
              prop: 'name',
              options: [
                { value: 1, label: 1 },
                { value: 2, label: 2 },
              ],
              onChange(val) {
                formDialogOpera.toggleColumn({
                  remark: val === 1,
                })
              },
            },
            { label: 'age', prop: 'age' },
            { label: 'remark', prop: 'remark', hidden: true },
          ],
          post(_model) {
            return new Promise<void>((r) => {
              setTimeout(() => {
                ElMessage.success('新增成功')
                r()
              }, 1000)
            })
          },
          put(_model) {
            return new Promise<void>((r) => {
              setTimeout(() => {
                ElMessage.success('修改成功')
                r()
              }, 1000)
            })
          },
        })

        const onAdd = () => {
          command(Commands.post, { name: 2 })
            .then(() => console.log('post then'))
            .catch(() => console.log('post catch'))
        }

        return { formDialogState, onAdd }
      },
      template: `
        <ElButton @click="onAdd">新增</ElButton>
        <OneFormDialog v-bind="formDialogState" />
      `,
    }
  },
}

export const 管理页面: Story = {
  args: {},
  render: () => {
    return {
      components: { OneTable, ElPagination, OneFormDialog, ElButton, OneForm },
      setup() {
        type Row = LayoutT & { name: string }

        const { queryState, tableState, formDialogState, pagination, mixedState, command, resetQuery, query } =
          useLayout<Row>({
            queryColumns: [{ prop: 'name', label: '名称' }],
            columns: [
              { prop: 'name', label: '名称' },
              {
                prop: 'opera',
                label: '操作',
                formatter(row) {
                  const handleDetail = () => {
                    command(Commands.custom, row, { title: '这是详情', cmd: 'detail', rType: CommandRType.afterDrawer })
                      .then((data) => console.log('custom detail then', data))
                      .catch(() => console.log('custom detail catch'))
                  }
                  const handleEdit = () => {
                    command(Commands.putByDrawer, row, { title: '这是编辑' })
                      .then(() => console.log('put then'))
                      .catch(() => console.log('put catch'))
                  }
                  const handleExport = () => {
                    command(Commands.export, row)
                      .then(() => console.log('export then'))
                      .catch(() => console.log('export catch'))
                  }
                  const handleDel = () => {
                    command(Commands.delete, row, { title: '删除吗?' })
                      .then(() => console.log('delete then'))
                      .catch(() => console.log('delete catch'))
                  }
                  return (
                    <div>
                      <ElButton link type='primary' loading={row._detail_} onClick={handleDetail}>
                        查看详情
                      </ElButton>
                      <ElButton link type='primary' loading={row._putting_} onClick={handleEdit}>
                        编辑
                      </ElButton>
                      <ElButton link type='primary' loading={row._exporting_} onClick={handleExport}>
                        导出
                      </ElButton>
                      <ElButton link type='danger' loading={row._deleting_} onClick={handleDel}>
                        删除
                      </ElButton>
                    </div>
                  )
                },
              },
            ],
            formColumns: [
              { label: 'name', prop: 'name' },
              { label: 'remark', prop: 'remark' },
            ],
            customColumns: [
              { showType: 'detail', prop: 'name', label: '详情名称' },
              { showType: 'detail', prop: 'age', label: '详情Age' },
            ],
            get(query, pagination) {
              return new Promise((r) => {
                console.log('get')

                setTimeout(() => {
                  const list = new Array(10).fill(0).map(() => ({
                    name: `name-${pagination.currentPage}-${query.name ?? ''}`,
                  }))

                  r({ list, total: 100 })
                }, 1000)
              })
            },
            post(_model) {
              return new Promise<void>((r) => {
                setTimeout(() => {
                  ElMessage.success('新增成功')
                  r()
                }, 1000)
              })
            },
            put(_model) {
              return new Promise<void>((r) => {
                setTimeout(() => {
                  ElMessage.success('修改成功')
                  r()
                }, 1000)
              })
            },
            delete(_model) {
              return new Promise<void>((r) => {
                setTimeout(() => {
                  ElMessage.success('删除成功')
                  r()
                }, 1000)
              })
            },
            export(_model, _p) {
              return new Promise<void>((r) => {
                setTimeout(() => {
                  ElMessage.success('导出成功')
                  r()
                }, 1000)
              })
            },
            custom(cmd, row, _form) {
              if (cmd === 'detail') {
                return new Promise((r) => {
                  setTimeout(() => {
                    const data = { ...row, age: Math.random() }

                    r(data)
                  }, 1000)
                })
              }

              //
            },
          })

        const onAdd = () => {
          command(Commands.post)
            .then(() => console.log('post then'))
            .catch(() => console.log('post catch'))
        }

        return { queryState, tableState, formDialogState, pagination, mixedState, onAdd, resetQuery, query }
      },
      template: `
        <ElButton :loading="mixedState.posting" @click="onAdd">新增</ElButton>
        <OneForm v-bind="queryState" />
        <ElButton :loading="mixedState.querying" @click="query()">查询</ElButton>
        <ElButton :loading="mixedState.querying" @click="resetQuery">重置</ElButton>
        <OneTable v-bind="tableState" height=300 />
        <ElPagination v-bind="pagination" />
        <OneFormDialog v-bind="formDialogState" />
      `,
    }
  },
}
