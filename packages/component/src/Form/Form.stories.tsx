import type { Meta, StoryObj } from '@storybook/vue3'
import { OneForm as Form } from './index'
import { ref } from 'vue'
import React from 'react'
import { FormInstance } from 'element-plus'
import { useForm } from '../useForm'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Example/Form',
  component: Form,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  args: {}, // default value
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const BasicForm: Story = {
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
        onChange(value) {
          console.log(value)
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
        onChange(cur, prev) {
          console.log(cur, prev)
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
      {
        rType: 'date',
        label: 'date2',
        prop: 'date2',
        type: 'datetime',
        formItemProps: {
          prop: 'date2',
          label: 'date2',
        },
      },
      {
        rType: 'radio',
        prop: 'radio',
        options: [
          { label: '12121', value: 1212 },
          { label: '2222', value: 2222 },
        ],
        onChange(val) {
          console.log('val: ', val)
        },
        formItemProps: {
          prop: 'radio',
          label: 'radio',
        },
      },
      {
        prop: 'opera',
        rType: 'select',
        options: [
          { label: '12', value: 12 },
          { label: '14', value: 14 },
        ],
        formItemProps: {
          prop: 'opera',
          label: 'opera',
        },
      },
      {
        prop: 'check',
        rType: 'checkbox',
        options: [
          { label: '12', value: 22 },
          { label: '14', value: 23 },
        ],
        formItemProps: {
          prop: 'checkbox',
          label: 'checkbox',
        },
      },
      {
        rType: 'custom',
        prop: 'custom',
        render: () => {
          return <div>0000000</div>
        },
        formItemProps: {
          prop: '',
          label: '',
        },
      },
    ],
  },
  render(args) {
    return {
      components: { Form },
      setup() {
        const formRef = ref<FormInstance>()
        const click = () => {
          formRef.value?.validate((v) => {
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

export const UseForm: Story = {
  args: {
    model: {},
    columns: [],
  },
  render() {
    return {
      components: { Form },
      setup() {
        type Data = {
          name: string
          age: number
          opera: number[]
        }

        const { formState, toggleColumn, setColumn } = useForm<Data>({
          columns: [
            { label: 'name', prop: 'name', requiredMsg: 'name 必填' },
            { label: 'age', prop: 'age', rType: 'number', min: 1 },
            {
              label: 'opera',
              prop: 'opera',
              rType: 'checkbox',
              options: [
                { label: '操作1', value: 1 },
                { label: '操作2', value: 2 },
                { label: '操作3', value: 3 },
                { label: '操作4', value: 4 },
                { label: '操作5', value: 5 },
              ],
            },
            {
              rType: 'remote',
              prop: 'remote',
              params: {},
              valueKey: 'id',
              valueMap: { id: 'iot' },
              method([p, keyword, params]) {
                console.log('query:', p, keyword, params)

                return new Promise((r) => {
                  setTimeout(() => {
                    r({
                      list: new Array(20).fill(1).map((_, i) => {
                        return {
                          label: `${p.page}-${i}`,
                          id: `${p.page}-${i}-${keyword}`,
                          value: {
                            id: `${p.page}-${i}-${keyword}`,
                            i,
                          },
                        }
                      }),
                      total: 50,
                    })
                  }, 500)
                })
              },
              // multiple: true,
              renderLabel(i) {
                return i.label
              },
              onChange(val) {
                console.log('onChange', val)
              },
              clearable: true,
            },
          ],
        })

        const toggleOpera = () => {
          toggleColumn('remote')
        }
        const setRemoteParams = () => {
          setColumn('remote', { params: { time: Date.now() } })
        }

        const randomLabel = () => setColumn('name', { label: Math.random().toString() })

        return { formState, toggleOpera, randomLabel, setRemoteParams }
      },
      template: `
        <button @click="toggleOpera">toggle</button>
        <button @click="randomLabel">random name label</button>
        <button @click="setRemoteParams">setRemoteParams</button>
        <Form v-bind="formState">
        </Form>
      `,
    }
  },
}
