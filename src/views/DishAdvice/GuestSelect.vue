<script setup lang="ts">
import { guests, locations } from '@/data';
import { ref, computed, reactive, onBeforeUnmount } from 'vue';

import type { Guest } from '@/data';

const emit = defineEmits(['guestSelect']);
const recentGuests = reactive<String[]>(
  JSON.parse(localStorage.getItem('recentGuests') ?? '[]'),
);
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
  asArray: true,
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

function treeSelect(data: Guest & { guests: Guest }) {
  if (!data.guests) {
    if (recentGuests.includes(data.name)) {
      recentGuests.splice(recentGuests.indexOf(data.name), 1);
    } else if (recentGuests.length > 19) {
      recentGuests.pop();
    }
    recentGuests.unshift(data.name);
    localStorage.setItem('recentGuests', JSON.stringify(recentGuests));
    emit('guestSelect', data);
  }
}
function inputSelect({ value }: { value: string }) {
  treeSelect(guests.find((item) => item.name === value) as any);
}
function fetchSuggestions(query: string, cb: Function) {
  cb(
    query
      ? guests
          .filter((guest) => guest.name.includes(query))
          .map(({ name }) => ({ value: name }))
      : recentGuests.map((guest) => ({ value: guest })),
  );
}

const inputRef = ref<HTMLInputElement>();
function slashListener(event: KeyboardEvent) {
  if (inputRef.value?.onfocus || event.code !== 'Slash') return;
  inputRef.value?.focus();
  event.stopPropagation();
  event.preventDefault();
}
window.addEventListener('keypress', slashListener);
onBeforeUnmount(() => {
  window.removeEventListener('keypress', slashListener);
});
</script>

<template>
  <div class="divide-y pr-20px">
    <div>
      <ElAutocomplete
        ref="inputRef"
        v-model="treeParams.searchName"
        :fetch-suggestions="fetchSuggestions"
        clearable
        @select="inputSelect"
        placeholder="/搜索 ↑↓切换 ↲确认"
      />
      <ElCheckbox v-model="treeParams.type.rare">稀有</ElCheckbox>
      <ElCheckbox v-model="treeParams.type.special">特殊</ElCheckbox>
      <ElCheckbox v-model="treeParams.type.normal">普通</ElCheckbox>
      <ElCheckbox v-model="treeParams.asArray">平铺</ElCheckbox>
    </div>
    <ElTree :data="treeData" :props="defaultProps" @node-click="treeSelect" />
  </div>
</template>
