<script setup lang="ts">
import type { Ingredients } from '@/data';
const emit = defineEmits(['update:modelValue']);
const { ingredient, modelValue } = defineProps<{
  modelValue: Boolean;
  ingredient: Ingredients;
}>();
console.log(ingredient);
</script>
<template>
  <ElDrawer
    :modelValue="modelValue"
    @update:modelValue="emit('update:modelValue', $event)"
    :with-header="false"
  >
    <div class="h-full flex flex-col">
      <h1 class="font-bold">补充特性</h1>
      <hr />
      <el-table
        :data="ingredient"
        header-cell-class-name="el-header-cell"
        class="flex-1"
      >
        <el-table-column prop="name" label="食材" />
        <el-table-column prop="type" label="类型" width="80" />
        <el-table-column prop="features" label="补充特性" />
      </el-table>
    </div>
  </ElDrawer>
</template>
