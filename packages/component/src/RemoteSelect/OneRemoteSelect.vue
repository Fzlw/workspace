<template>
  <ElSelect
    filterable
    v-bind="$attrs"
    ref="remoteRef"
    :model-value="props.modelValue"
    :filter-method="filterMethod"
    :options="options"
    @update:model-value="onUpdateModelValue"
    @visible-change="onVisible"
  >
    <template #empty>
      <p v-loading="loading" class="el-select-dropdown__empty">{{ props.noDataText }}</p>
    </template>
    <ElOption v-for="i in options" v-bind="i" :key="i.key"> </ElOption>
  </ElSelect>
</template>

<script lang="ts" setup>
import { reactive, ref, unref, watch, nextTick, onBeforeUnmount } from 'vue'
import { ElSelect, vLoading, ElInfiniteScroll, ElOption } from 'element-plus'
import 'element-plus/es/components/loading/style/css'
import { uniqueId, isBoolean, isObject } from 'lodash-es'
import { Pagination } from '../types'
import { SelectProps, RemoteColumn, ElOptionProps } from '../useColumn'
import { OptionValue } from './types'

export interface Props {
  modelValue: any
  params: RemoteColumn['params']
  method: RemoteColumn['method']
  noDataText?: SelectProps['noDataText']
  renderLabel: RemoteColumn['renderLabel']
  valueKey: RemoteColumn['valueKey']
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
const remoteRef = ref()
const pagination = reactive<Pagination>({ page: 1, pageSize: 20, total: 0 })
const keyword = ref()
let optionsMap = new Map<ElOptionProps['value'], any>()
let timer: null | number = null

const filterMethod = (queryStr?: string) => {
  timer && clearTimeout(timer)
  timer = window.setTimeout(() => {
    if (inited.value && !loading.value && remoteRef.value?.visible) {
      options.value = []
      pagination.page = 1
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
    options.value = []
    pagination.page = 1
    inited.value = false

    filterMethod('')
  }
)

const formatOption = (i: any) => {
  let label,
    value,
    key,
    isObj = isObject(i),
    vKey = props.valueKey ?? 'value'

  if (props.renderLabel) {
    label = props.renderLabel(i)
  } else {
    label = isObj ? i?.label : i
  }

  value = isObj ? i?.[vKey] : i

  if (props.valueKey) {
    key = i[props.valueKey]
  } else {
    key = isBoolean(value) || isObject(value) ? uniqueId() : value ?? uniqueId()
  }

  return {
    ...(isObj ? i : null),
    label,
    value,
    key,
  }
}

const query = async () => {
  try {
    loading.value = true

    const res = await props.method([unref(pagination), keyword.value, unref(props.params)])
    const list: ElOptionProps[] = []

    for (const i of res.list) {
      const option = formatOption(i)

      list.push(option)
      optionsMap.set(option.value, i)
    }

    options.value = pagination.page === 1 ? list : options.value.concat(list)
    pagination.total = res.total ?? options.value.length
    inited.value = true
  } catch (error) {
    console.error('remoteMethod Error', error)
  }
  loading.value = false
}

const next = () => {
  const { page, pageSize, total = 0 } = pagination

  if (!loading.value && inited.value && page * pageSize < total) {
    pagination.page += 1
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
  if (val && !inited.value && !loading.value) return query()
  if (!val && keyword.value) {
    options.value = []
    pagination.page = 1
    inited.value = false
    keyword.value = ''
  }
}

const onUpdateModelValue = (val: OptionValue | OptionValue[]) => {
  emit('update:modelValue', val)
  emit('changeMap', Array.isArray(val) ? val.map((i) => optionsMap.get(i)) : optionsMap.get(val))
}
</script>
