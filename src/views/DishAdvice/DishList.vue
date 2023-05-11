<script setup lang="ts">
import LisTable, { parseShortTableProps } from '@/components/LisTable';
import { Dish } from '@/data';
const { dishes } = defineProps<{ dishes: Dish[] }>();
const emit = defineEmits(['dishSelect']);
function rowClick(value: Dish) {
  emit('dishSelect', value);
}
const tableProps = parseShortTableProps({
  name: ['菜肴'],
  cookware: ['厨具', { width: 100 }],
  ingredients: ['食材'],
  features: ['匹配正特性'],
  missingFeatures: ['反特性'],
  price: ['售价', { width: 80 }],
  unlock: ['解锁方式'],
});
</script>
<template>
  <LisTable :tableProps="tableProps" :tableData="dishes" @rowClick="rowClick" />
</template>

<style scoped lang="scss">
:deep(.el-header-cell) {
  background-color: var(--el-table-row-hover-bg-color) !important;
  color: var(--el-color-primary);
  font-size: 14px;
}
</style>
