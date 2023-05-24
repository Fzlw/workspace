<template>
  <ElForm :model="props.model" ref="form">
    <OneTable v-bind="$attrs" :columns="props.columns"> </OneTable>
  </ElForm>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FormProps, FormInstance, ElForm } from 'element-plus'
import { OneTable } from '../Table'
import { VerifyEditTableColumn } from './types'

export interface Props<T = unknown> {
  model: FormProps['model']
  columns: VerifyEditTableColumn<T>[]
}

const props = defineProps<Props>()

const form = ref<FormInstance>({} as any)

const validate: FormInstance['validate'] = (cb) => form.value.validate(cb)
const validateField: FormInstance['validateField'] = (props, cb) => form.value.validateField(props, cb)
const resetFields: FormInstance['resetFields'] = (props) => form.value.resetFields(props)
const scrollToField: FormInstance['scrollToField'] = (prop) => form.value.scrollToField(prop)
const clearValidate: FormInstance['clearValidate'] = (props) => form.value.clearValidate(props)

defineExpose({ validate, validateField, resetFields, scrollToField, clearValidate })
</script>
