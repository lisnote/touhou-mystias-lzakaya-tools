<script setup lang="ts">
import { useMainStore } from '@/store';
import { menuRoutes } from '@/router';
const mainStore = useMainStore();
const bilibiliLink = import.meta.env.VITE_BILIBILI;
</script>
<template>
  <nav class="navigator">
    <div>
      <RouterLink to="/" class="project-name">
        {{ mainStore.projectName.toUpperCase() }}
      </RouterLink>
      <span class="divide-x">
        <RouterLink
          v-for="item in menuRoutes"
          :key="item.title"
          :to="item.path"
          class="px-2"
        >
          {{ item.title }}
        </RouterLink>
      </span>
    </div>
    <a class="navigator-action" :href="bilibiliLink">
      <img
        class="w-30px rounded-1/2"
        src="https://avatars.githubusercontent.com/lisnote"
      />
      <span>{{ mainStore.author }}</span>
    </a>
  </nav>
</template>
<style scoped lang="scss">
.navigator {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 0;

  .project-name {
    font-size: xx-large;
    margin: 0 10px;
  }

  .navigator-action {
    display: flex;
    align-items: center;

    > * {
      margin: 0 0.5rem;
    }
  }
}
</style>
