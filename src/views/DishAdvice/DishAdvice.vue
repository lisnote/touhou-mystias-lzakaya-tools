<script lang="ts" setup>
import { guests } from '@/data';
import common from '@/styles/common.module.scss';
import GuestsSelect from './GuestsSelect.vue';

console.log(guests.filter((item) => item.type != 'normal'));
</script>
<template>
  <div :class="common.contentArea" class="divide-x-1 flex">
    <ElScrollbar class="w-200px">
      <GuestsSelect />
    </ElScrollbar>
    <div class="flex-1">article</div>
  </div>
</template>
