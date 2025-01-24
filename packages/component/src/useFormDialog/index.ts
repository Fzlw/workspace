import { computed, ref, watch } from 'vue'
import { useForm, UseFormOptions, SubmitPost } from '../useForm'
import { FormDialogProps } from '../FormDialog'
import { FormDrawerProps } from '../FormDrawer'
import { callBack } from '../utils'

export type UseFormDialogOptions<T> = UseFormOptions<T> & {
  post?: SubmitPost<T>
  onClose?: VoidFunction
  onOpen?: VoidFunction
}

export type DialogAndDrawer = FormDialogProps | FormDrawerProps

export function useFormDialog<T extends object>(opts: UseFormDialogOptions<T>) {
  const { formState, getModel, ...other } = useForm<T>(opts)
  const visible = ref(false)
  const extProps = ref({})

  const submit = (post = opts.post) => {
    return other.submit(async (model) => {
      // FIXME: 快速点击情况下 当提交结束关闭弹窗过程中会再次触发
      visible.value && post && (await post(model))

      hide()
    })
  }

  const onUpdateModelValue = (val: boolean) => {
    visible.value = val
  }
  const onSubmit = () => submit(opts.post)

  const formDialogState = computed(() => {
    return {
      formState,
      visible: visible.value,
      submitting: formState.submitting,
      'onUpdate:modelValue': onUpdateModelValue,
      onSubmit,
      ...extProps.value,
    }
  })

  const show = (props?: Partial<DialogAndDrawer> & { onSubmit?: () => Promise<void> }) => {
    extProps.value = {
      ...props,
      onClosed() {
        callBack((props as FormDialogProps)?.onClosed)
        // NOTE: 避免在关闭弹窗时表单项闪烁
        other.setModel({}, true)
      },
    }
    visible.value = true
  }

  const hide = () => {
    visible.value = false
  }

  const close = () => callBack(opts.onClose)

  watch(visible, (val) => {
    val ? opts.onOpen?.() : close()
  })

  return {
    ...other,
    formDialogState,
    show,
    hide,
    submit,
    getModel: getModel as <K extends keyof T = keyof T>(_k: K) => T[K],
  }
}
