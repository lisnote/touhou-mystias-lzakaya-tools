<script setup lang="ts">
import LisTable, { parseShortTableProps } from '@/components/LisTable';
import type { Ingredient } from '@/data';
const emit = defineEmits(['update:modelValue']);
const { ingredient, modelValue } = defineProps<{
  modelValue: Boolean;
  ingredient: Ingredient[];
}>();

const tableProps = parseShortTableProps({
  name: ['食材'],
  type: ['类型', { width: 80 }],
  features: ['补充特性'],
});
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
      <LisTable
        :tableProps="tableProps"
        :tableData="ingredient"
      />
    </div>
  </ElDrawer>
</template>
