<script lang="tsx">
import { defineComponent, computed, withDirectives, h, PropType, DirectiveArguments, ref } from 'vue'
import vElTableInfiniteScroll from 'el-table-infinite-scroll'
import { ElTable, ElTableColumn, vLoading, TableInstance } from 'element-plus'
import { TableColumn, LoadMode, OneTableProps } from './types'

export default defineComponent({
  props: {
    columns: { type: Array as PropType<TableColumn<any>[]>, required: true },
    loading: { type: Boolean },
    selected: { type: Array },
    mode: { type: Number as PropType<LoadMode> },
  },
  emits: ['update:selected', 'next'],
  setup(props, { emit }) {
    const elTable = ref<TableInstance | null>(null)
    const disabled = computed(() => props.mode !== LoadMode.infinite)

    const onSelectionChange = (e: OneTableProps['data']) => emit('update:selected', e)

    return { disabled, onSelectionChange, elTable }
  },
  render() {
    const { $attrs, $slots, $emit, columns, loading, disabled, onSelectionChange } = this
    const directives: DirectiveArguments = [[vLoading, loading]]

    if (!disabled) directives.push([vElTableInfiniteScroll, () => $emit('next')])

    return withDirectives(
      h(
        ElTable,
        { ...$attrs, 'infinite-scroll-disabled': disabled, onSelectionChange, ref: 'elTable' },
        {
          ...$slots,
          default: () => columns.map((i) => h(ElTableColumn, { key: i.prop, ...i })),
        }
      ),
      directives
    )
  },
})
</script>
