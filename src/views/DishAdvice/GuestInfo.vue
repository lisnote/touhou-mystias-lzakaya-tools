<script setup lang="ts">
import type { Guest } from '@/data';
const { guest } = defineProps<{ guest: Guest }>();
</script>
<template>
  <el-descriptions :title="guest.name">
    <el-descriptions-item label="喜好">
      <ElTag v-for="item in guest.likedDishTraits" :key="item" class="mr-10px">
        {{ item }}
      </ElTag>
    </el-descriptions-item>
    <el-descriptions-item label="厌恶" v-if="guest.unlikedDishTraits">
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
</template>
