<script lang="tsx">
import { defineComponent, shallowRef } from 'vue'
import type { PropType } from 'vue'
import { ElForm, ElFormItem } from 'element-plus'
import type { FormInstance } from 'element-plus'
import { renderColumn, NonModel } from '../useColumn'
import type { FormColumn } from './types'

export default defineComponent({
  props: {
    model: { type: Object as PropType<NonModel>, required: true },
    columns: { type: Array as PropType<FormColumn[]>, required: true },
  },
  setup(_props) {
    const elForm = shallowRef<FormInstance>()

    return {
      elForm,
    }
  },
  render() {
    const { $slots, $attrs, model, columns } = this

    return (
      <ElForm {...$attrs} model={model} ref='elForm'>
        {columns.map((i) => {
          const { formItemProps, label, ...other } = i

          return (
            <ElFormItem key={i.prop} label={label} {...formItemProps}>
              {renderColumn(model, other, $slots)}
            </ElFormItem>
          )
        })}
      </ElForm>
    )
  },
})
</script>
