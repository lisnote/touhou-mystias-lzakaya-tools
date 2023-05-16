<script lang="ts" setup>
import common from '@/styles/common.module.scss';
import GuestSelect from './GuestSelect.vue';
import GuestInfo from './GuestInfo.vue';
import DishList from './DishList.vue';
import IngredientList from './IngredientList.vue';
import { guests, dishes, ingredients, FootFeature } from '@/data';
import { ref } from 'vue';

import type { Guest, Dish, Ingredient } from '@/data';

const guest = ref({} as Guest);
const filteredDishes = ref<Dish[]>([]);
guestSelect(guests[0]);
function guestSelect(value: Guest) {
  guest.value = value;
  filteredDishes.value = dishes
    .reduce((pre, dish) => {
      let features: FootFeature[] = [];
      for (let feature of dish.features) {
        if (
          // 角色讨厌该特性
          guest.value.unlikedDishTraits?.includes(feature)
        ) {
          return pre;
        } else if (
          // 角色喜欢该特性
          guest.value.likedDishTraits.includes(feature)
        ) {
          features.push(feature);
        }
      }
      if (features.length > 0) pre.push({ ...dish, features });
      return pre;
    }, [] as Dish[])
    .sort((x, y) => y.features.length - x.features.length);
}

const ingredientListVisible = ref(false);
const dish = ref({} as Dish);
const filteredIngredients = ref<Ingredient[]>([]);
function dishSelect(value: Dish) {
  dish.value = value;
  filteredIngredients.value = ingredients
    .reduce((pre, ingredient) => {
      let features: FootFeature[] = [];
      for (let feature of ingredient.features) {
        if (
          // 角色讨厌该特性
          guest.value.unlikedDishTraits?.includes(feature) ||
          // 料理与食材不兼容
          dish.value.missingFeatures.includes(feature)
        ) {
          return pre;
        } else if (
          // 角色喜欢该特性
          guest.value.likedDishTraits.includes(feature) &&
          // 料理未包含该特性
          !dish.value.features.includes(feature)
        ) {
          features.push(feature);
        }
      }
      if (features.length > 0) pre.push({ ...ingredient, features });
      return pre;
    }, [] as Ingredient[])
    .sort((x, y) => y.features.length - x.features.length);
  ingredientListVisible.value = true;
}
</script>
<template>
  <div :class="common.contentArea" class="divide-x-1 flex">
    <ElScrollbar class="w-200px min-w-200px">
      <GuestSelect @guestSelect="guestSelect($event)" />
    </ElScrollbar>
    <div class="flex-1 pl-20px flex flex-col">
      <GuestInfo :guest="guest" />
      <DishList
        :dishes="filteredDishes"
        class="flex-1"
        @dishSelect="dishSelect"
      />
      <IngredientList
        :ingredient="filteredIngredients"
        v-model="ingredientListVisible"
      />
    </div>
  </div>
</template>
