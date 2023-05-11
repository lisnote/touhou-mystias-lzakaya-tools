<script setup lang="ts">
const { tableProps, tableData } = defineProps<{
  tableProps: {
    label: string;
    prop: string;
    style?: {
      width?: number;
      minWidth?: number;
    };
  }[];
  tableData: any[];
}>();
</script>
<template>
  <ElTable :data="tableData">
    <ElTableColumn
      v-for="col in tableProps"
      :prop="col.prop"
      :label="col.label"
      :width="col.style?.width"
      :minWidth="col.style?.minWidth"
    />
  </ElTable>
</template>
