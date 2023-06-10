<script lang="tsx">
import { defineComponent, ref } from 'vue'
import type { PropType } from 'vue'
import { ElForm, ElFormItem } from 'element-plus'
import type { FormInstance } from 'element-plus'
import { useColumn, NonModel } from '../useColumn'
import type { FormColumn } from './types'

export default defineComponent({
  props: {
    model: { type: Object as PropType<NonModel>, required: true },
    columns: { type: Array as PropType<FormColumn[]>, required: true },
  },
  setup(_props) {
    const oneForm = ref<FormInstance>()

    const renderColumn = useColumn()

    return {
      oneForm,
      renderColumn,
    }
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
