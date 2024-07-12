<template>
  <ElDrawer
    v-bind="$attrs"
    :model-value="visible"
    @update:model-value="(value: boolean) => emit('update:modelValue', value)"
  >
    <template #header>
      <slot name="header"></slot>
    </template>

    <OneForm :disabled="submitting" v-bind="formState">
      <template v-for="(_, name) in $slots" v-slot:[name]="data">
        <slot :name="name" v-bind="data" />
      </template>
    </OneForm>
    <template #footer>
      <slot
        name="footer"
        :onNo="onNo"
        :onOK="onOK"
        :submitting="submitting"
        :okText="okText"
        :noText="noText"
        :okProps="okProps"
        :noProps="noProps"
      >
        <ElButton v-if="noText" v-bind="noProps" @click="onNo">{{ noText }}</ElButton>
        <ElButton v-if="okText" type="primary" :loading="submitting" v-bind="okProps" @click="onOK">
          {{ okText }}
        </ElButton>
      </slot>
    </template>
  </ElDrawer>
</template>

<script setup lang="ts">
import { ElDrawer, ElButton, ButtonProps } from 'element-plus'
import { OneFormProps, OneForm } from '../Form'
import { ElDrawerProps } from './types'

export interface Props {
  visible: ElDrawerProps['modelValue']
  formState: OneFormProps
  noText?: string
  okText?: string
  noProps?: Partial<ButtonProps>
  okProps?: Partial<ButtonProps>
  submitting?: boolean
}

const _props = withDefaults(defineProps<Props>(), {
  noText: '取消',
  okText: '确定',
})
const emit = defineEmits<{
  (e: 'update:modelValue', data: ElDrawerProps['modelValue']): void
  (e: 'submit'): void
}>()

const onNo = () => {
  emit('update:modelValue', false)
}
const onOK = () => {
  emit('submit')
}
</script>
