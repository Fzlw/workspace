<!-- <script lang="tsx">
import { defineComponent, ref } from 'vue'
import type { PropType } from 'vue'
import { ElForm, ElFormItem } from 'element-plus'
import type { FormInstance } from 'element-plus'
import { useColumn } from '../useColumn'
import type { FormColumn } from './types'

export default defineComponent({
  props: {
    columns: { type: Array as PropType<FormColumn[]>, required: true },
  },
  setup(_props, { attrs }) {
    const oneForm = ref<FormInstance>()

    const formState = attrs.model ?? {}

    const renderColumn = useColumn()

    return {
      oneForm,
      formState,
      renderColumn,
    }
  },
  render() {
    const { formState, $attrs, columns, renderColumn } = this

    return (
      <ElForm {...$attrs} ref='oneForm'>
        {columns.map((i) => {
          const { formItemProps, ...other } = i

          return (
            <ElFormItem key={i.prop} {...formItemProps}>
              {renderColumn(formState, other, this.$slots)}
            </ElFormItem>
          )
        })}
      </ElForm>
    )
  },
})
</script> -->

<!-- 上面的tsx会产生一个ts编译错误 https://github.com/microsoft/TypeScript/issues/47663 -->

<script lang="jsx">
import { defineComponent, ref } from 'vue'
import { ElForm, ElFormItem } from 'element-plus'
import { useColumn } from '../useColumn'

export default defineComponent({
  props: {
    model: { type: Object, required: true, default: () => ({}) },
    columns: { type: Array, required: true },
  },
  setup(_props) {
    const oneForm = ref()

    const renderColumn = useColumn()

    return { oneForm, renderColumn }
  },
  render() {
    const { model, $attrs, columns, renderColumn } = this

    return (
      <ElForm {...$attrs} model={model} ref='oneForm'>
        {columns.map((i) => {
          const { formItemProps, ...other } = i

          return (
            <ElFormItem key={i.prop} {...formItemProps}>
              {renderColumn(model, other, this.$slots)}
            </ElFormItem>
          )
        })}
      </ElForm>
    )
  },
})
</script>
