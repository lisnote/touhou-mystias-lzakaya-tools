<script setup lang="ts">
import { Ingredients } from '@/data';
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
  >
    asdf
  </ElDrawer>
</template>
