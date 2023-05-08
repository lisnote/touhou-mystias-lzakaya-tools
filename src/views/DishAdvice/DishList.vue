<script setup lang="ts">
import { Dish } from '@/data';
const { dishes } = defineProps<{ dishes: Dish[] }>();
const emit = defineEmits(['deshSelect']);
function rowClick(value: Dish) {
  emit('deshSelect', value);
}
</script>
<template>
  <el-table
    :data="dishes"
    header-cell-class-name="el-header-cell"
    @row-click="rowClick"
  >
    <el-table-column prop="name" label="菜肴" />
    <el-table-column prop="cookware" label="厨具" width="100" />
    <el-table-column prop="ingredients" label="食材" />
    <el-table-column prop="features" label="匹配正特性" />
    <el-table-column prop="missingFeatures" label="反特性" />
    <el-table-column prop="price" label="售价" width="80" />
    <el-table-column prop="unlock" label="解锁方式" />
  </el-table>
</template>

<style scoped lang="scss">
:deep(.el-header-cell) {
  background-color: var(--el-table-row-hover-bg-color) !important;
  color: var(--el-color-primary);
  font-size: 14px;
}
</style>
