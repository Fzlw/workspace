<template>
  <ElForm :model="model" ref="elForm">
    <OneTable v-bind="{ ...$attrs, ...tableState }"> </OneTable>
  </ElForm>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue'
import { FormProps, FormInstance, ElForm } from 'element-plus'
import { OneTable } from '../Table'
import { TableState } from '../useTable'

export interface Props<T = unknown> {
  tableState: TableState<T>
  model: FormProps['model']
}

const _props = defineProps<Props>()

const elForm = shallowRef<FormInstance | null>(null)

defineExpose({ elForm })
</script>
