<template>
  <ElDialog
    v-bind="$attrs"
    :model-value="props.visible"
    @update:model-value="(value) => emit('update:modelValue', value)"
  >
    <template #header>
      <slot name="header"></slot>
    </template>

    <OneForm :disabled="submitting" v-bind="props.formState">
      <template v-for="(_, name) in $slots" v-slot:[name]="data">
        <slot :name="name" v-bind="data" />
      </template>
    </OneForm>
    <template #footer>
      <slot name="footer">
        <ElButton v-if="props.noText" v-bind="props.noProps" @click="onNo">{{ props.noText }}</ElButton>
        <ElButton v-if="props.okText" type="primary" :loading="submitting" v-bind="props.okProps" @click="onOK">
          {{ props.okText }}
        </ElButton>
      </slot>
    </template>
  </ElDialog>
</template>

<script setup lang="ts">
import { ElDialog, ElButton, ButtonProps } from 'element-plus'
import { OneFormProps, OneForm } from '../Form'
import { ElDialogProps } from './types'

export interface Props {
  visible: ElDialogProps['modelValue']
  formState: OneFormProps
  noText?: string
  okText?: string
  noProps?: ButtonProps
  okProps?: ButtonProps
  submitting?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  noText: '取消',
  okText: '确定',
})
const emit = defineEmits<{
  (e: 'update:modelValue', data: ElDialogProps['modelValue']): void
  (e: 'submit'): void
}>()

const onNo = () => {
  emit('update:modelValue', false)
}
const onOK = () => {
  emit('submit')
}
</script>
