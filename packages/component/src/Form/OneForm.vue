<template>
  <BaseForm v-bind="{ ...props, ...$attrs }" ref="form">
    <template v-for="(_, name) in $slots" v-slot:[name]="data">
      <slot :name="name" v-bind="data" />
    </template>
  </BaseForm>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FormInstance } from 'element-plus'
import BaseForm from './BaseForm.vue'
import { NonModel } from '../useColumn'
import { FormColumn } from './types'

export interface Props {
  model: NonModel
  columns: FormColumn[]
}

const props = defineProps<Props>()

const form = ref<{ oneForm: FormInstance }>({} as any)

const validate: FormInstance['validate'] = (cb) => form.value.oneForm.validate(cb)
const validateField: FormInstance['validateField'] = (props, cb) => form.value.oneForm.validateField(props, cb)
const resetFields: FormInstance['resetFields'] = (props) => form.value.oneForm.resetFields(props)
const scrollToField: FormInstance['scrollToField'] = (prop) => form.value.oneForm.scrollToField(prop)
const clearValidate: FormInstance['clearValidate'] = (props) => form.value.oneForm.clearValidate(props)

defineExpose({ validate, validateField, resetFields, scrollToField, clearValidate })
</script>
