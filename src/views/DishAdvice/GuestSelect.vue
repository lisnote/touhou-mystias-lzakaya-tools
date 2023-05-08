<script setup lang="ts">
import { guests, locations } from '@/data';
import { computed, reactive } from 'vue';

import type { Guest } from '@/data';

const emit = defineEmits(['guestSelect']);

const defaultProps = {
  children: 'guests',
  label: 'name',
};

const treeParams = reactive({
  type: {
    normal: false,
    rare: true,
    special: true,
  },
  asArray: false,
  searchName: '',
});

let treeData = computed(() => {
  // 过滤参数
  const filteredGuests = guests.filter((item) => {
    if (!treeParams.type.normal && item.type == 'normal') return false;
    if (!treeParams.type.rare && item.type == 'rare') return false;
    if (!treeParams.type.special && item.type == 'special') return false;
    if (!item.name.includes(treeParams.searchName)) return false;
    return true;
  });
  // 以树模式还是以数组模式展示角色
  if (treeParams.asArray) {
    return filteredGuests;
  } else {
    let locationsMap = {} as { [key: string]: Guest[] };
    filteredGuests.forEach((item) => {
      item.locations.forEach((locations) => {
        if (!locationsMap[locations]) locationsMap[locations] = [] as Guest[];
        locationsMap[locations].push(item);
      });
      return locationsMap;
    });
    return locations
      .map((location) => {
        return {
          name: location,
          guests: locationsMap[location],
        };
      })
      .filter((location) => location.guests?.length ?? 0 !== 0);
  }
});

const handleNodeClick = (data: Guest & { guests: Guest }) => {
  if (!data.guests) emit('guestSelect', data);
};
</script>

<template>
  <div class="divide-y pr-20px">
    <div>
      <ElInput v-model="treeParams.searchName" placeholder="查找角色" />
      <ElCheckbox v-model="treeParams.type.rare">稀有</ElCheckbox>
      <ElCheckbox v-model="treeParams.type.special">特殊</ElCheckbox>
      <ElCheckbox v-model="treeParams.type.normal">普通</ElCheckbox>
      <ElCheckbox v-model="treeParams.asArray">平铺</ElCheckbox>
    </div>
    <ElTree
      :data="treeData"
      :props="defaultProps"
      @node-click="handleNodeClick"
    />
  </div>
</template>
