<script lang="ts" setup>
import { ElSubMenu, ElMenuItem } from 'element-plus';

import type { RecursiveMenuData } from '.';

defineProps<{ data: RecursiveMenuData }>();
</script>
<template>
  <ElSubMenu
    v-if="data.children?.length ?? 0 > 0"
    :index="data.index"
    @click="data.onClick"
  >
    <template #title>{{ data.title }}</template>
    <MenuItem
      v-for="(item, index) in data.children"
      :key="index"
      :data="item"
    />
  </ElSubMenu>
  <ElMenuItem v-else :index="data.index" @click="data.onClick">
    {{ data.title }}
  </ElMenuItem>
</template>
