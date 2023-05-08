<script setup lang="ts">
import { guests, dishes, beverages, ingredients } from '@/data';
import globalStyles from '@/styles/globalStyles.module.scss';

function stringify(value: any) {
  return JSON.stringify(value, null, 2);
}

const tabData = [
  { label: '顾客', value: stringify(guests) },
  { label: '料理', value: stringify(dishes) },
  { label: '酒水', value: stringify(beverages) },
  { label: '食材', value: stringify(ingredients) },
];
</script>

<template>
  <div :class="globalStyles.contentArea">
    <el-tabs>
      <el-tab-pane
        v-for="item in tabData"
        :key="item.label"
        :label="item.label"
      >
        <pre class="whitespace-pre-wrap">{{ item.value }}</pre>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<style scoped lang="scss">
// pre {
//   overflow-wrap: break-word;
//   word-break: break-all;
//   white-space: break-spaces;
// }
</style>
