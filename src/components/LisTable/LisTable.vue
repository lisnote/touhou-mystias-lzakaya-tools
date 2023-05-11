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
  <ElTable
    :data="tableData"
    :header-cell-class-name="$style.header"
    v-bind="$attrs"
  >
    <ElTableColumn
      v-for="col in tableProps"
      :prop="col.prop"
      :label="col.label"
      :width="col.style?.width"
      :minWidth="col.style?.minWidth"
    />
  </ElTable>
</template>
<style module>
.header {
  background-color: var(--el-table-row-hover-bg-color) !important;
  color: var(--el-color-primary);
  font-size: 14px;
}
</style>
