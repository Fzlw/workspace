<template>
  <ElSelect
    v-bind="$attrs"
    ref="remoteRef"
    :model-value="modelValue"
    :filter-method="filterMethod"
    @update:model-value="onUpdateModelValue"
    @visible-change="onVisible"
  >
    <template #empty>
      <p v-loading="loading" class="el-select-dropdown__empty">{{ loading ? '&nbsp;' : noDataText }}</p>
    </template>
    <ElOption v-for="i in options" v-bind="i" :key="i.key" />
  </ElSelect>
</template>

<script lang="ts" setup>
import { reactive, ref, unref, watch, nextTick, onBeforeUnmount, shallowRef, onMounted } from 'vue'
import { ElSelect, vLoading, ElInfiniteScroll, ElOption } from 'element-plus'
import 'element-plus/es/components/loading/style/css'
import { Pagination } from '../types'
import { SelectProps, RemoteColumn, ElOptionProps } from '../useColumn'
import { OptionValue } from './types'
import { formatOption, isUndefinedOrNullChar } from '../utils'

export interface Props {
  modelValue: any
  method: RemoteColumn['method']
  params?: RemoteColumn['params']
  noDataText?: SelectProps['noDataText']
  renderLabel?: RemoteColumn['renderLabel']
  valueKey?: RemoteColumn['valueKey']
  labelKey?: RemoteColumn['labelKey']
  noCache?: boolean
  defaultOptions?: RemoteColumn['defaultOptions']
}

const props = withDefaults(defineProps<Props>(), {
  noDataText: '无数据',
})
const emit = defineEmits<{
  (e: 'update:modelValue', val: any): void
  (e: 'changeMap', val: Props['modelValue'] | Props['modelValue'][]): void
}>()

const options = ref<ElOptionProps[]>([])

const loading = ref(false)
const inited = ref(false) // 数据初始化
const initedScroll = ref(false) // 无限列表初始
const remoteRef = shallowRef()
const pagination = reactive<Pagination>({ currentPage: 1, pageSize: 20, total: 0 })
const keyword = ref('')
let optionsMap = new Map<ElOptionProps['value'], any>()
let timer: null | number = null

const filterMethod = (queryStr = '') => {
  timer && clearTimeout(timer)
  timer = window.setTimeout(() => {
    if (inited.value && !loading.value && remoteRef.value?.visible) {
      options.value = []
      pagination.currentPage = 1
      keyword.value = queryStr

      query()
    }
  }, 200)
}

onBeforeUnmount(() => {
  timer && clearTimeout(timer)
  optionsMap.clear()
  optionsMap = null as any
  timer = null
})

// 外部参数变化重置内部状态
watch(
  () => props.params,
  () => {
    if (inited.value) {
      options.value = []
      pagination.currentPage = 1
      inited.value = false

      filterMethod('')
    }
  }
)

const query = async () => {
  try {
    loading.value = true

    const res = await props.method([unref(pagination), keyword.value, unref(props.params)])
    const list: ElOptionProps[] = []

    for (const i of res.list) {
      const option = formatOption(i, props.valueKey, props.labelKey, props.renderLabel)

      list.push(option)
      optionsMap.set(option.value, i)
    }

    options.value = pagination.currentPage === 1 ? list : options.value.concat(list)
    pagination.total = res.total ?? options.value.length
    inited.value = true
    loading.value = false
  } catch (error) {
    loading.value = false

    throw error
  }
}

const next = () => {
  const { total = 0 } = pagination

  if (!loading.value && inited.value && options.value.length < total) {
    pagination.currentPage += 1
    query()
  }
}

const getScrollEle = () => {
  const parent = remoteRef.value.popperPaneRef as HTMLElement
  const scrollEle = parent?.querySelector('.el-scrollbar__wrap')

  return scrollEle
}
const initScroll = () => {
  const scrollEle = getScrollEle()

  if (!initedScroll.value) {
    if (scrollEle) {
      scrollEle.setAttribute('infinite-scroll-distance', '2')
      // @ts-ignore
      ElInfiniteScroll.mounted(scrollEle, {
        instance: parent,
        value: next,
      })
    }

    initedScroll.value = true
  }

  if (inited.value && scrollEle) {
    scrollEle.scrollTo(0, 0)
  }
}
const destoryScroll = () => {
  const scrollEle = getScrollEle()

  if (scrollEle && initedScroll.value) {
    // @ts-ignore
    ElInfiniteScroll.unmounted(scrollEle)
  }
}

watch(inited, () => nextTick(initScroll))
onBeforeUnmount(destoryScroll)

const onVisible = (val: boolean) => {
  if (val) {
    if (!inited.value && !loading.value) {
      options.value = []

      query()
    }
  } else {
    if (keyword.value || props.noCache) {
      options.value = []
      pagination.currentPage = 1
      keyword.value = ''
      inited.value = false
    }
  }
}

const onUpdateModelValue = (val: OptionValue | OptionValue[]) => {
  emit('update:modelValue', val)
  emit('changeMap', Array.isArray(val) ? val.map((i) => optionsMap.get(i)) : optionsMap.get(val))
}

onMounted(() => {
  // FIXME: 数据未初始化前使用默认配置
  if (!inited.value && !isUndefinedOrNullChar(props.modelValue) && props.defaultOptions) {
    options.value = props.defaultOptions
  }
})
</script>
