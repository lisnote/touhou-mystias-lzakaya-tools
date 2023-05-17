<script setup lang="ts">
import data from '@/data';
import LisTable, { parseShortTableProps } from '@/components/LisTable';
import common from '@/styles/common.module.scss';
import { ref } from 'vue';

type DataType = 'guests' | 'dishes' | 'beverages' | 'ingredients';
const dataTypeMap: { [key in DataType]: DataType } = {
  guests: 'guests',
  dishes: 'dishes',
  beverages: 'beverages',
  ingredients: 'ingredients',
};

// 当前标签
const activedTab = ref(dataTypeMap.guests);

// 定义表格属性
const tablePropsMap: { [key in DataType]: any } = {
  guests: parseShortTableProps({
    name: ['名称', { width: 130 }],
    locations: ['出现地点'],
    balance: ['持有金额', { width: 110 }],
    likedDishTraits: ['喜好-料理'],
    likedBeverageTraits: ['喜好-酒水'],
    unlikedDishTraits: ['厌恶'],
    type: ['类型', { width: 80 }],
  }),
  dishes: parseShortTableProps({
    name: ['名称'],
    cookware: ['厨具', { width: 70 }],
    price: ['价格', { width: 60 }],
    ingredients: ['食材'],
    features: ['特性', { minWidth: 150 }],
    missingFeatures: ['反特性'],
    cookingTime: ['烹饪时间'],
    unlock: ['解锁方式'],
    description: ['描述', { minWidth: 300 }],
  }),
  beverages: parseShortTableProps({
    name: ['名称'],
    price: ['价格', { width: 60 }],
    features: ['特性'],
    obtaining: ['获取方式'],
    description: ['描述', { minWidth: 300 }],
  }),
  ingredients: parseShortTableProps({
    name: ['名称', { width: 120 }],
    type: ['类型', { width: 60 }],
    features: ['特性'],
    relatedFoods: ['相关料理', { minWidth: 150 }],
    description: ['描述', { minWidth: 300 }],
  }),
};
</script>

<template>
  <div :class="common.contentArea" class="flex flex-col">
    <ElTabs v-model="activedTab">
      <ElTabPane label="顾客" :name="dataTypeMap.guests" />
      <ElTabPane label="料理" :name="dataTypeMap.dishes" />
      <ElTabPane label="酒水" :name="dataTypeMap.beverages" />
      <ElTabPane label="食材" :name="dataTypeMap.ingredients" />
    </ElTabs>
    <LisTable
      v-for="dataType in dataTypeMap"
      :key="dataType"
      v-show="activedTab === dataType"
      :tableProps="tablePropsMap[dataType]"
      :tableData="(data[dataType])"
    ></LisTable>
  </div>
</template>
