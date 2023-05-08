<script lang="ts" setup>
import common from '@/styles/common.module.scss';
import GuestSelect from './GuestSelect.vue';
import GuestInfo from './GuestInfo.vue';
import DishList from './DishList.vue';
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
        if (guest.value.unlikedDishTraits?.includes(feature)) return pre;
        if (guest.value.likedDishTraits.includes(feature))
          features.push(feature);
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
        if (guest.value.unlikedDishTraits?.includes(feature)) return pre;
        if (guest.value.likedDishTraits.includes(feature))
          features.push(feature);
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
      <GuestInfo :guest="guest" />
      <DishList :dishes="filteredDishes" />
    </ElScrollbar>
  </div>
</template>
