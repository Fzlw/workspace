<template>
    <ElTable :data="tableData">
        <ElTableColumn prop="date" label="Date"></ElTableColumn>
        <ElTableColumn prop="name" label="Name"></ElTableColumn>
        <ElTableColumn prop="address" label="Address"></ElTableColumn>
    </ElTable>
</template>

<script lang="ts" setup>
import {ElTable, ElTableColumn} from 'element-plus'

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>