<script setup lang="ts">
import { useMainStore } from '@/store';
const mainStore = useMainStore();
const bilibiliLink = import.meta.env.VITE_BILIBILI;
</script>
<template>
  <nav class="navigator">
    <div>
      <RouterLink to="/" class="project-name">
        {{ mainStore.projectName.toUpperCase() }}
      </RouterLink>
      <RouterLink to="DishAdvice" class="divide">推荐菜</RouterLink>
      <RouterLink to="DataSource" class="divide">数据源</RouterLink>
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
.divide {
  border-left-width: 1px;
  padding:0 10px;
}
</style>
