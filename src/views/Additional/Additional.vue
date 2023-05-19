<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useStorage } from '@vueuse/core';

import common from '@/styles/common.module.scss';

import type { ElForm, FormRules } from 'element-plus';

// 基础数据
const additionalDishes = useStorage(
  import.meta.env.VITE_PROJECT_NAME + 'additionalDishes',
  [] as any[],
);
// 表单------------------------------------------------
const formData = reactive<{ [key: string]: any }>({});
const formRef = ref<InstanceType<typeof ElForm>>();
const rules = reactive<FormRules>({
  name: [{ required: true, max: 30 }],
  cookware: [{ required: true, max: 30 }],
  price: [{ required: true, max: 30 }],
  ingredients: [{ required: true, max: 100 }],
  features: [{ required: true, max: 100 }],
  missingFeatures: [{ max: 100 }],
  cookingTime: [{ required: true, max: 30 }],
  unlock: [{ required: true, max: 30 }],
  description: [{ required: true, max: 300 }],
});
// 提交数据
async function submit() {
  let validation = false;
  await formRef.value?.validate((value) => (validation = value));
  if (!validation) return;
  const dish: any = {
    ...formData,
    price: Number(formData.price ?? 0),
    cookingTime: Number(formData.cookingTime ?? 0),
    ingredients: formData.ingredients
      .split(/,|，/)
      .map((item: string) => item.trim()),
    features: formData.features
      .split(/,|，/)
      .map((item: string) => item.trim()),
    missingFeatures: (formData.missingFeatures?.split(/,|，/) ?? []).map(
      (item: string) => item.trim(),
    ),
  };
  additionalDishes.value.push(dish);
  fetch(import.meta.env.VITE_BACKEND, {
    method: 'POST',
    body: JSON.stringify(dish,null,2),
  });
}
// 表格 --------------------------------------------------------------------
function deleteDish(index: number) {
  additionalDishes.value.splice(index, 1);
}
</script>
<template>
  <div :class="common.contentArea">
    <div class="text-center">
      <div>由于百科上的菜谱不完整, 我也不确定有没有缺了什么菜</div>
      <div>所以暂时提供此页以补充菜谱</div>
    </div>
    <ElForm
      ref="formRef"
      :model="formData"
      labelWidth="80"
      class="container mx-auto w-200"
      :rules="rules"
    >
      <ElFormItem prop="name" label="名称">
        <ElInput v-model="formData.name" />
      </ElFormItem>
      <ElFormItem prop="cookware" label="厨具">
        <ElInput v-model="formData.cookware" />
      </ElFormItem>
      <ElFormItem prop="price" label="价格">
        <ElInput type="number" v-model="formData.price" />
      </ElFormItem>
      <ElFormItem prop="ingredients" label="食材">
        <ElInput v-model="formData.ingredients" />
      </ElFormItem>
      <ElFormItem prop="features" label="特性">
        <ElInput v-model="formData.features" />
      </ElFormItem>
      <ElFormItem prop="missingFeatures" label="反特性">
        <ElInput v-model="formData.missingFeatures" />
      </ElFormItem>
      <ElFormItem prop="cookingTime" label="烹饪时间">
        <ElInput type="number" v-model="formData.cookingTime" />
      </ElFormItem>
      <ElFormItem prop="unlock" label="解锁方式">
        <ElInput v-model="formData.unlock" />
      </ElFormItem>
      <ElFormItem prop="description" label="描述">
        <ElInput type="textarea" v-model="formData.description" rows="5"/>
      </ElFormItem>
      <ElFormItem>
        <ElButton @click="submit">提交</ElButton>
      </ElFormItem>
    </ElForm>
    <ElTable :data="additionalDishes">
      <ElTableColumn label="名称" prop="name"></ElTableColumn>
      <ElTableColumn label="厨具" prop="cookware"></ElTableColumn>
      <ElTableColumn label="价格" prop="price"></ElTableColumn>
      <ElTableColumn label="食材" prop="ingredients"></ElTableColumn>
      <ElTableColumn label="特性" prop="features"></ElTableColumn>
      <ElTableColumn label="反特性" prop="missingFeatures"></ElTableColumn>
      <ElTableColumn label="烹饪时间" prop="cookingTime"></ElTableColumn>
      <ElTableColumn label="解锁方式" prop="unlock"></ElTableColumn>
      <ElTableColumn label="描述" prop="description"></ElTableColumn>
      <ElTableColumn label="操作" prop="description" width="160">
        <template v-slot="{ $index }">
          <ElButton @click="deleteDish($index)">删除</ElButton>
        </template>
      </ElTableColumn>
    </ElTable>
  </div>
</template>
