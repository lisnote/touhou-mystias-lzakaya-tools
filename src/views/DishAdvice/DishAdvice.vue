<script lang="ts" setup>
import common from '@/styles/common.module.scss';
import GuestSelect from './GuestSelect.vue';

import type { Guest } from '@/data';

function guestSelect(guest: Guest) {
  console.log(guest);
}
</script>
<template>
  <div :class="common.contentArea" class="divide-x-1 flex">
    <ElScrollbar class="w-200px">
      <GuestSelect @guestSelect="guestSelect" />
    </ElScrollbar>
    <div class="flex-1">article</div>
  </div>
</template>
