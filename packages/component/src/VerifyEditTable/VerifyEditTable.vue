<template>
  <ElForm :model="props.model" ref="elForm">
    <OneTable v-bind="{ ...$attrs, ...props.tableState }"> </OneTable>
  </ElForm>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FormProps, FormInstance, ElForm } from 'element-plus'
import { OneTable } from '../Table'
import { TableState } from '../useTable'

export interface Props<T = unknown> {
  tableState: TableState<T>
  model: FormProps['model']
}

const props = defineProps<Props>()

const elForm = ref<FormInstance | null>(null)

defineExpose({ elForm })
</script>
