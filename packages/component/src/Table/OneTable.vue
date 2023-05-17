<template>
  <ElTable
    v-loading="props.loading"
    v-el-table-infinite-scroll="() => emit('next')"
    v-bind="$attrs"
    @selection-change="onSelectionChange"
  >
    <ElTableColumn v-for="column in props.columns" :key="column.prop" v-bind="column"></ElTableColumn>
  </ElTable>
</template>

<script lang="ts" setup>
import vElTableInfiniteScroll from 'el-table-infinite-scroll'
import { ElTable, ElTableColumn, vLoading } from 'element-plus'
import 'element-plus/es/components/loading/style/css'
import { TableColumn, OneTableProps } from './types'

export interface Props<T = any> {
  columns: TableColumn<T>[]
  loading?: boolean
  selected?: T[]
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:selected', data: OneTableProps['data']): void
  (e: 'next'): void
}>()

const onSelectionChange = (e: OneTableProps['data']) => emit('update:selected', e)
</script>
