<script setup lang="ts">
import data from '@/data';
import { ref } from 'vue';
import common from '@/styles/common.module.scss';

const activedTab = ref<keyof typeof data>('guests');
</script>

<template>
  <div :class="common.contentArea" class="flex flex-col">
    <ElTabs v-model="activedTab">
      <ElTabPane label="顾客" name="guests" />
      <ElTabPane label="料理" name="dishes" />
      <ElTabPane label="酒水" name="beverages" />
      <ElTabPane label="食材" name="ingredients" />
    </ElTabs>
    <ElScrollbar>
      <pre class="flex-1 overflow-auto">{{
        JSON.stringify(data[activedTab], null, 2)
      }}</pre>
    </ElScrollbar>
  </div>
</template>
