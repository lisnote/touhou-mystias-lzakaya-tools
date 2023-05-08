<script setup lang="ts">
import beverages from '@/data/beverages';
import dishes from '@/data/dishes';
import ingredients from '@/data/ingredients';
import guests from '@/data/guests';
import globalStyles from '@/styles/globalStyles.module.scss';

function stringify(value: any) {
  return JSON.stringify(value, null, 2);
}
</script>

<template>
  <div :class="globalStyles.contentArea" class="break-words">
    <el-tabs>
      <el-tab-pane label="顾客">
        <pre>{{ stringify(guests) }}</pre>
      </el-tab-pane>
      <el-tab-pane label="料理">
        <pre>{{ stringify(dishes) }}</pre>
      </el-tab-pane>
      <el-tab-pane label="酒水">
        <pre>{{ stringify(beverages) }}</pre>
      </el-tab-pane>
      <el-tab-pane label="食材">
        <pre>{{ stringify(ingredients) }}</pre>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
