import type { Meta, StoryObj } from '@storybook/vue3'
import { OneFormDrawer as Form, useFormDialog } from '@fzlw/eui-plus'
// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
/**
 * 基于 el-drawer 和 OneForm 实现 $attrs 会透传至 el-drawer
 */
const meta = {
  title: 'Example/OneFormDrawer',
  component: Form,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    visible: {
      description: '显示/隐藏抽屉',
      defaultValue: { summary: false },
      control: {
        type: 'boolean',
      },
    },
    formProps: {
      description: 'OneForm组件的props',
      defaultValue: { summary: 'OneFormProps' },
      control: {
        type: 'object',
      },
    },
    noText: {
      description: '取消按钮的文案(为空则不展示)',
      defaultValue: { summary: '取消' },
      control: {
        type: 'text',
      },
    },
    noProps: {
      description: '取消按钮props',
      defaultValue: { summary: 'Partial<ButtonProps>' },
      control: {
        type: 'object',
      },
    },
    okText: {
      description: '确定按钮的文案(为空则不展示)',
      defaultValue: { summary: '确定' },
      control: {
        type: 'text',
      },
    },
    okProps: {
      description: '确定按钮props',
      defaultValue: { summary: 'Partial<ButtonProps>' },
      control: {
        type: 'object',
      },
    },
    submitting: {
      description: '提交中的响应式状态',
      defaultValue: { summary: false },
      control: {
        type: 'boolean',
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
  render(args) {
    return {
      components: { Form },
      setup() {
        type Data = {
          name: string
          age: number
          opera: number[]
        }

        const { formDialogState, submit, show, hide, setColumn } = useFormDialog<Data>({
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
              onChange() {
                setColumn('remote', { disabled: false })
              },
            },
            {
              rType: 'remote',
              prop: 'remote',
              params: {},
              valueKey: 'id',
              valueMap: { id: 'iot' },
              disabled: true,
              method([p, keyword, params]) {
                console.log('query:', p, keyword, params)

                return new Promise((r) => {
                  setTimeout(() => {
                    r({
                      list: new Array(20).fill(1).map((_, i) => {
                        return {
                          label: `${p.currentPage}-${i}`,
                          id: `${p.currentPage}-${i}-${keyword}`,
                          value: {
                            id: `${p.currentPage}-${i}-${keyword}`,
                            i,
                          },
                        }
                      }),
                      total: 50,
                    })
                  }, 500)
                })
              },
              multiple: true,
              renderLabel(i) {
                return i.label
              },
              onChange(val) {
                console.log('onChange', val)
              },
              clearable: true,
            },
            { rType: 'date', prop: '' },
            {
              rType: 'custom',
              prop: '',
              render() {
                return <div onClick={hide}>hide</div>
              },
            },
          ],
          post(model) {
            return new Promise<void>((r) => {
              setTimeout(() => {
                console.log(model)
                r()
              }, 3000)
            })
          },
        })

        return { args, formDialogState, submit, show }
      },
      template: `
        <button @click="show">show</button>
        <Form v-bind="{...args, ...formDialogState}">
        </Form>
      `,
    }
  },
}
