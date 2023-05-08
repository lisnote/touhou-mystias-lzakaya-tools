<script setup lang="ts">
import { useMainStore } from '@/store';
// import { Setting } from '@element-plus/icons-vue';
const mainStore = useMainStore();
</script>
<template>
  <nav class="navigator">
    <RouterLink to="/" class="project-name">
      {{ mainStore.projectName.toUpperCase() }}
    </RouterLink>
    <div class="navigator-action">
      <img
        class="w-10 rounded-1/2"
        src="https://avatars.githubusercontent.com/lisnote"
      />
      <span>{{ mainStore.author }}</span>
      <!-- <Setting class="cursor-pointer icon" /> -->
    </div>
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
