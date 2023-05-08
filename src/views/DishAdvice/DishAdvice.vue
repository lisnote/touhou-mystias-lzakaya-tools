<script lang="ts" setup>
import common from '@/styles/common.module.scss';
import GuestSelect from './GuestSelect.vue';
import { guests, dishes, ingredients } from '@/data';
import { ref } from 'vue';

import type { Guest, Dish, Ingredients } from '@/data';

const guest = ref({} as Guest);
const filteredDishes = ref<Dish[]>([]);
const filteredIngredients = ref<Ingredients[]>([]);
function guestSelect(value: Guest) {
  guest.value = value;
  // 过滤菜肴
  filteredDishes.value = dishes
    .reduce((pre, dish) => {
      let features: string[] = [];
      for (let feature of dish.features) {
        if (value.unlikedDishTraits?.includes(feature)) return pre;
        if (value.likedDishTraits.includes(feature)) features.push(feature);
      }
      if (features.length > 0) pre.push({ ...dish, features });
      return pre;
    }, [] as Dish[])
    .sort((x, y) => y.features.length - x.features.length);
  // 过滤食材
  filteredIngredients.value = ingredients
    .reduce((pre, ingredient) => {
      let features: string[] = [];
      for (let feature of ingredient.features) {
        if (value.unlikedDishTraits?.includes(feature)) return pre;
        if (value.likedDishTraits.includes(feature)) features.push(feature);
      }
      if (features.length > 0) pre.push({ ...ingredient, features });
      return pre;
    }, [] as Ingredients[])
    .sort((x, y) => y.features.length - x.features.length);
}
guestSelect(guests[0]);
</script>
<template>
  <div :class="common.contentArea" class="divide-x-1 flex">
    <ElScrollbar class="w-200px">
      <GuestSelect @guestSelect="guestSelect($event)" />
    </ElScrollbar>
    <ElScrollbar class="flex-1 pl-20px">
      <el-descriptions :title="guest.name" v-if="guest.name">
        <el-descriptions-item label="喜好">
          <ElTag
            v-for="item in guest.likedDishTraits"
            :key="item"
            class="mr-10px"
          >
            {{ item }}
          </ElTag>
        </el-descriptions-item>
        <el-descriptions-item label="厌恶">
          <ElTag
            v-for="item in guest.unlikedDishTraits"
            :key="item"
            type="danger"
            class="mr-10px"
          >
            {{ item }}
          </ElTag>
        </el-descriptions-item>
      </el-descriptions>

      <el-table :data="filteredDishes" header-cell-class-name="el-header-cell">
        <el-table-column prop="name" label="菜肴" />
        <el-table-column prop="cookware" label="厨具" width="100" />
        <el-table-column prop="ingredients" label="食材" />
        <el-table-column prop="features" label="匹配正特性" />
        <el-table-column prop="missingFeatures" label="反特性" />
        <el-table-column prop="price" label="售价" width="80" />
        <el-table-column prop="unlock" label="解锁方式" />
      </el-table>

      <el-table
        :data="filteredIngredients"
        header-cell-class-name="el-header-cell"
      >
        <el-table-column prop="name" label="食材" width="150"/>
        <el-table-column prop="type" label="种类" width="150"/>
        <el-table-column prop="features" label="匹配特性" width="300"/>
        <el-table-column prop="relatedFoods" label="关联料理" />
      </el-table>
    </ElScrollbar>
  </div>
</template>
<style scoped lang="scss">
:deep(.el-header-cell) {
  background-color: var(--el-table-row-hover-bg-color) !important;
  color: var(--el-color-primary);
  font-size: 14px;
}
</style>
