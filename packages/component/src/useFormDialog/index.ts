import { computed, ref, watch } from 'vue'
import { useForm, UseFormOptions, SubmitPost, IFormColumn as FormColumn } from '../useForm'
import { FormDialogProps } from '../FormDialog'

export type UseFormDialogOptions<T> = UseFormOptions<T> & {
  post?: SubmitPost<T>
  onClose?: VoidFunction
  onOpen?: VoidFunction
}

export function useFormDialog<T extends object>(opts: UseFormDialogOptions<T>) {
  const { formState, getModel, ...other } = useForm<T>(opts)
  const visible = ref(false)
  const dialogProps = ref({})

  const submit = (post?: SubmitPost<T>) => {
    return other.submit(async (model) => {
      post && (await post(model))

      hide()
    })
  }

  const onUpdateModelValue = (val: boolean) => {
    visible.value = val
    !val && (dialogProps.value = {})
  }
  const onSubmit = () => submit(opts.post)

  const formDialogState = computed(() => {
    return {
      formState,
      visible: visible.value,
      submitting: formState.submitting,
      'onUpdate:modelValue': onUpdateModelValue,
      onSubmit,
      ...dialogProps.value,
    }
  })

  const show = (props?: Partial<FormDialogProps> & { onSubmit?: () => Promise<void> }) => {
    props && (dialogProps.value = props)
    visible.value = true
  }

  const hide = () => {
    visible.value = false
  }

  watch(visible, (val) => {
    val ? opts.onOpen?.() : opts.onClose?.()
  })

  const forEachColumns = (cb: (i: FormColumn, index: number, arr: FormColumn[]) => void) =>
    formState.columns.forEach(cb)

  return {
    ...other,
    formDialogState,
    show,
    hide,
    submit,
    getModel: getModel as <K extends keyof T = keyof T>(_k: K) => T[K],
    forEachColumns,
  }
}
