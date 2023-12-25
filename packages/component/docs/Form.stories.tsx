import type { Meta, StoryObj } from '@storybook/vue3'
import { OneForm as Form, useForm, CustomScope } from '../src'
import { ref, reactive, toRaw, onMounted, nextTick } from 'vue'
import React from 'react'
import { ElButton, ElDialog } from 'element-plus'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
/**
 * 完全基于 el-form 组件 除列举的props外 其他$attrs会透传至el-form
 * https://element-plus.org/zh-CN/component/form.html
 */
const meta = {
  title: 'Example/OneForm',
  component: Form,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    columns: {
      description: '列信息',
      defaultValue: { summary: 'FormColumn[]' },
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
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const 基础用例: Story = {
  args: {
    model: {},
    columns: [
      {
        prop: 'name',
        formItemProps: {
          prop: 'name',
          label: 'name',
          required: true,
        },
      },
      {
        prop: 'age',
        rType: 'number',
        min: 1,
        formItemProps: {
          prop: 'age',
          label: 'age',
        },
      },
      {
        rType: 'date',
        label: 'date',
        prop: 'date',
        formItemProps: {
          prop: 'date',
          label: 'date',
        },
      },
    ],
  },
  render(args) {
    return {
      components: { Form },
      setup() {
        const formRef = ref<any>()
        const click = () => {
          formRef.value?.elForm.validate((v) => {
            console.log('valid', v)
          })
        }

        return { args, formRef, click }
      },
      template: `
        <button @click="click">submit</button>
        <Form v-bind="args" class="frfr" ref='formRef'>
          <template #custom="{ model }">
            <div>customcustom {{model.name}}</div>
          </template>
        </Form>
      `,
    }
  },
}

/**
 * OneForm 组件实例 ref此时由useForm 代理
 * 需要使用组件实例可以使用 const { form } = useForm()
 */
export const 配合useForm使用: Story = {
  render() {
    return {
      components: { Form, ElButton },
      setup() {
        type Data = {
          name: string
          age: number
          opera: number[]
          radio: number
          date: Date
        }

        const { formState, submit } = useForm<Data>({
          columns: [
            { label: '文本输入框', prop: 'name', requiredMsg: 'name 必填' },
            { label: '数字输入框', prop: 'age', rType: 'number', min: 1 },
            {
              label: '单独选框',
              prop: 'opera-single',
              rType: 'checkbox',
              border: true,
            },
            {
              label: '多选框',
              prop: 'opera',
              rType: 'checkboxGroup',
              options: [
                { label: '多选1', value: 1 },
                { label: '多选2', value: 2 },
                { label: '多选3', value: 3 },
                { label: '多选4', value: 4 },
                { label: '多选5', value: 5 },
              ],
            },
            {
              label: '单选框',
              prop: 'radio',
              rType: 'radio',
              options: [
                { label: '单选1', value: 1 },
                { label: '单选2', value: 2 },
                { label: '单选3', value: 3 },
                { label: '单选4', value: 4 },
                { label: '单选5', value: 5 },
              ],
            },
            { rType: 'date', prop: 'date', label: '日期选择' },
            {
              label: '选择器',
              prop: 'select',
              rType: 'select',
              options: [
                { label: '选择1', value: 1 },
                { label: '选择2', value: 2 },
                { label: '选择3', value: 3 },
                { label: '选择4', value: 4 },
                { label: '选择5', value: 5 },
              ],
            },
            {
              label: '开关',
              rType: 'switch',
              prop: 'switch',
              inlinePrompt: true,
              activeText: '是',
              inactiveText: '否',
            },
            {
              rType: 'color',
              prop: 'color',
              label: '颜色选择',
            },
          ],
        })

        const click = () => {
          submit((model) => {
            console.log(model)
          })
        }

        return { formState, click }
      },
      template: `
        <ElButton @click="click">submit</ElButton>
        <Form v-bind="formState">
          <span>8765e</span>
        </Form>
      `,
    }
  },
}

export const 自定义内容Template: Story = {
  render() {
    return {
      components: { Form },
      setup() {
        type Data = {
          name: string
          age: number
          opera: number[]
          radio: number
          date: Date
        }

        const { formState } = useForm<Data>({
          columns: [
            { label: '请输入内容', prop: 'name' },
            { rType: 'custom', prop: 'custom' },
          ],
        })

        return { formState }
      },
      template: `
        <Form v-bind="formState">
          <template #custom="{ model }">
            <div>这是一段自定义内容 {{ model.name }}</div>
          </template>
        </Form>
      `,
    }
  },
}

/**
 * 配合 @vitejs/plugin-vue-jsx 使用
 */
export const 自定义内容Jsx: Story = {
  render() {
    return {
      components: { Form },
      setup() {
        type Data = {
          name: string
          age: number
          opera: number[]
          radio: number
          date: Date
        }

        const { formState } = useForm<Data>({
          columns: [
            { label: '请输入内容', prop: 'name' },
            {
              rType: 'custom',
              prop: '',
              render(scope: CustomScope<Data>) {
                return <div>JSX这是一段自定义内容:{scope.model.name}</div>
              },
            },
          ],
        })

        return { formState }
      },
      template: `
        <Form v-bind="formState">
        </Form>
      `,
    }
  },
}

/**
 * 内部使用 OneRemoteSelect 组件
 */
export const 远程筛选: Story = {
  render() {
    return {
      components: { Form },
      setup() {
        type Data = {
          name: string
          age: number
          opera: number[]
          radio: number
          date: Date
        }

        const { formState } = useForm<Data>({
          columns: [
            {
              rType: 'remote',
              prop: 'remote',
              valueKey: 'id',
              labelKey: 'labelName',
              valueMap: { id: 'iot' },
              method([p, keyword, params]) {
                console.log('query:', p, keyword, params)

                return new Promise((r) => {
                  setTimeout(() => {
                    r({
                      list: new Array(20).fill(1).map((_, i) => {
                        return {
                          labelName: `ll-${p.currentPage}-${i}-${keyword}`,
                          id: `${p.currentPage}-${i}-${keyword}`,
                          value: {
                            id: `${p.currentPage}-${i}-${keyword}`,
                            i,
                          },
                        }
                      }),
                      total: 50,
                    })
                  }, 300)
                })
              },
              multiple: true,
              onChange(val) {
                console.log('onChange', val)
              },
              clearable: true,
              filterable: true,
              noCache: true,
            },
            {
              label: '区域',
              prop: 'eqp_area_id',
              rType: 'remote',
              valueKey: 'id',
              labelKey: 'label',
              noCache: true,
              filterable: true,
              method() {
                return new Promise((r) => {
                  setTimeout(() => {
                    r({
                      list: new Array(20).fill(1).map((i, j) => {
                        return {
                          label: `机台区域_0822_${j}`,
                          id: j,
                        }
                      }),
                    })
                  }, 500)
                })
              },
            },
          ],
        })

        return { formState }
      },
      template: `
        <Form v-bind="formState">
        </Form>
      `,
    }
  },
}

export const 远程筛选默认值: Story = {
  render() {
    return {
      components: { Form },
      setup() {
        type Data = {
          remote: string
          label: string
          remote2: string
          label2: string
          remote3: string[]
          label3: string[]
        }

        const { formState } = useForm<Data>({
          columns: [
            {
              rType: 'remote',
              prop: 'remote',
              valueKey: 'id',
              method([p, keyword, _params]) {
                return new Promise((r) => {
                  setTimeout(() => {
                    r({
                      list: new Array(20).fill(1).map((_, i) => {
                        return {
                          label: `l-${p.currentPage}-${i}`,
                          id: `i-${p.currentPage}-${i}-${keyword || 0}`,
                          value: {
                            id: `${p.currentPage}-${i}-${keyword}`,
                            i,
                          },
                        }
                      }),
                      total: 50,
                    })
                  }, 1000)
                })
              },
              renderLabel(i) {
                return i.label
              },
              clearable: true,
              filterable: true,
              noCache: true,
            },
            {
              rType: 'remote',
              prop: 'remote2',
              valueKey: 'id',
              labelKey: 'label2',
              method([p, keyword, _params]) {
                return new Promise((r) => {
                  setTimeout(() => {
                    r({
                      list: new Array(20).fill(1).map((_, i) => {
                        return {
                          label2: `l2-${p.currentPage}-${i}`,
                          id: `i2-${p.currentPage}-${i}-${keyword ?? 0}`,
                          value: {
                            id: `${p.currentPage}-${i}-${keyword}`,
                            i,
                          },
                        }
                      }),
                      total: 50,
                    })
                  }, 1000)
                })
              },
              renderLabel(i) {
                return i.label2 + '=='
              },
              clearable: true,
              filterable: true,
              noCache: false,
            },
            {
              rType: 'remote',
              prop: 'remote3',
              valueKey: 'id',
              labelKey: 'label3',
              method([p, keyword, _params]) {
                return new Promise((r) => {
                  setTimeout(() => {
                    r({
                      list: new Array(20).fill(1).map((_, i) => {
                        return {
                          label3: `l3-${p.currentPage}-${i}`,
                          id: `i3-${p.currentPage}-${i}-${keyword ?? 0}`,
                          value: {
                            id: `${p.currentPage}-${i}-${keyword}`,
                            i,
                          },
                        }
                      }),
                      total: 50,
                    })
                  }, 1000)
                })
              },
              renderLabel(i) {
                return i.label3
              },
              clearable: true,
              filterable: true,
              multiple: true,
            },
          ],
          initData: {
            remote: 'i-1-0-0',
            label: 'l-1-0',
            remote2: 'i2-1-1-0',
            label2: 'l2-1-1',
            remote3: ['i3-1-2-0', 'i3-1-3-0'],
            label3: ['l3-1-2', 'l3-1-3'],
          },
        })

        return { formState }
      },
      template: `
        <Form v-bind="formState">
        </Form>
      `,
    }
  },
}

export const 远程筛选默认值_表单初始化: Story = {
  render() {
    return {
      components: { Form },
      setup() {
        type Data = {
          remote: string
          labelVal: string
        }

        const { formState, setModel } = useForm<Data>({
          columns: [
            {
              rType: 'remote',
              prop: 'remote',
              valueKey: 'id',
              labelKey: 'labelVal',
              method([p, keyword, _params]) {
                return new Promise((r) => {
                  setTimeout(() => {
                    r({
                      list: new Array(20).fill(1).map((_, i) => {
                        return {
                          labelVal: `l-${p.currentPage}-${i}`,
                          id: `i-${p.currentPage}-${i}-${keyword || 0}`,
                        }
                      }),
                      total: 50,
                    })
                  }, 1000)
                })
              },
              clearable: true,
              filterable: true,
              noCache: true,
            },
          ],
        })

        setModel({ remote: 'i-1-2-0', labelVal: 'l-1-2' })

        return { formState }
      },
      template: `
        <Form v-bind="formState">
        </Form>
      `,
    }
  },
}

export const 远程筛选默认值_弹窗初始化: Story = {
  render() {
    return {
      components: { Form, ElDialog, ElButton },
      setup() {
        type Data = {
          remote: string
          labelVal: string
        }

        const { formState, setModel } = useForm<Data>({
          columns: [
            {
              rType: 'remote',
              prop: 'remote',
              valueKey: 'id',
              labelKey: 'labelVal',
              method([p, keyword, _params]) {
                return new Promise((r) => {
                  setTimeout(() => {
                    r({
                      list: new Array(20).fill(1).map((_, i) => {
                        return {
                          labelVal: `l-${p.currentPage}-${i}`,
                          id: `i-${p.currentPage}-${i}-${keyword || 0}`,
                        }
                      }),
                      total: 50,
                    })
                  }, 1000)
                })
              },
              clearable: true,
              filterable: true,
              noCache: true,
            },
          ],
        })

        const visible = ref(false)
        const toggle = () => (visible.value = !visible.value)
        const open = () => setModel({ remote: 'i-1-2-0', labelVal: 'l-1-2' })

        return { formState, toggle, visible, open }
      },
      template: `
        <ElButton @click="toggle">Toggle</ElButton>
        <ElDialog v-model="visible" @open="open">
          <Form v-bind="formState">
          </Form>
        </ElDialog>
      `,
    }
  },
}

export const 隐藏显示切换: Story = {
  render() {
    return {
      components: { Form, ElButton },
      setup() {
        type Data = {
          name: string
          age: number
          opera: number[]
          show: number
        }

        const { formState, toggleColumn, setModel } = useForm<Data>({
          columns: [
            { label: 'name', prop: 'name' },
            { label: 'age', prop: 'age' },
            {
              rType: 'radio',
              prop: 'show',
              options: [
                { label: '显示', value: 1 },
                { label: '隐藏', value: 0 },
              ],
              onChange(val) {
                toggleColumn('opera', val === 1)
              },
            },
            { label: 'opera', prop: 'opera' },
          ],
          initData: {
            show: 1,
            age: 1,
          },
        })

        const reset = () => {
          setModel({ show: 1, age: 1 }, true)
        }

        return { formState, reset }
      },
      template: `
        <ElButton @click="reset">reset</ElButton>
        <Form v-bind="formState">
        </Form>
      `,
    }
  },
}

export const 初始化数据: Story = {
  render() {
    return {
      components: { Form, ElButton },
      setup() {
        type Data = {
          name: string
          age: number
          opera: number[]
          radio: number
          date: Date
        }

        const otherModel = reactive({ age: 11 })
        const { formState, setModel } = useForm<Data>({
          columns: [
            { label: '文本输入框', prop: 'name', requiredMsg: 'name 必填' },
            { label: '数字输入框', prop: 'age', rType: 'number', min: 1 },
          ],
          initData: toRaw(otherModel),
        })

        const reset = () => {
          setModel({ age: 11 }, true)
        }

        return { formState, reset }
      },
      template: `
        <ElButton @click="reset">reset</ElButton>
        <Form v-bind="formState">
          <span>8765e</span>
        </Form>
      `,
    }
  },
}

export const 下拉选项映射: Story = {
  render() {
    return {
      components: { Form, ElButton },
      setup() {
        const { formState } = useForm({
          columns: [
            {
              label: '下拉框',
              prop: 'selectVal',
              rType: 'select',
              valueKey: 'id',
              labelKey: 'name',
              valueMap: { eqp_list: 'eqpList', remark: 'remarkremark' },
              options: [
                {
                  name: 'm-lw',
                  eqp_area_id: 6,
                  remark: 'test21212111111111',
                  id: 2,
                  create_time: '2023-06-02 11:21:15',
                  update_time: '2023-06-05 09:56:27',
                  eqp_total: 7,
                  eqp_list: [{ id: 3, number: 'lw3', status: 4 }],
                },
              ],
              onChange(v) {
                console.log('onChange', v)
              },
            },
          ],
        })

        return { formState }
      },
      template: `
        <Form v-bind="formState">
        </Form>
      `,
    }
  },
}

/**
 * 打开控制台查看
 */
export const 获取ElForm组件实例: Story = {
  render() {
    return {
      components: { Form },
      setup() {
        const { formState, form } = useForm({
          columns: [
            {
              label: '下拉框',
              prop: 'selectVal',
              rType: 'select',
              valueKey: 'id',
              labelKey: 'name',
              valueMap: { eqp_list: 'eqpList', remark: 'remarkremark' },
              options: [
                {
                  name: 'm-lw',
                  eqp_area_id: 6,
                  remark: 'test21212111111111',
                  id: 2,
                  create_time: '2023-06-02 11:21:15',
                  update_time: '2023-06-05 09:56:27',
                  eqp_total: 7,
                  eqp_list: [{ id: 3, number: 'lw3', status: 4 }],
                },
              ],
              onChange(v) {
                console.log('onChange', v)
              },
            },
          ],
        })

        onMounted(() => {
          nextTick(() => {
            console.log(`组件实例：`, form.value)
          })
        })

        return { formState }
      },
      template: `
        <Form v-bind="formState">
        </Form>
      `,
    }
  },
}
