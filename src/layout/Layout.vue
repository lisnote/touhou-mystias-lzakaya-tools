<script setup lang="ts">
import Navigator from './Navigator';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const activeIndex = ref('');
router.isReady().then(() => {
  activeIndex.value = router.currentRoute.value.path;
});
</script>

<template>
  <div class="layout">
    <Navigator class="nav"></Navigator>
    <div class="main">
      <article class="article">
        <RouterView />
      </article>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100%;

  .nav {
    flex-shrink: 0;
    width: 100%;
    height: 50px;
    border-bottom: solid 1px var(--el-menu-border-color);
  }

  .main {
    flex: 1;
    display: flex;
    overflow: hidden;

    .sidebar {
      width: 200px;
      height: 100%;
    }

    .article {
      flex: 1;
      position: relative;
      overflow-y: auto;
      overflow-wrap: break-word;
      background-color: var(--el-bg-color-page);
    }
  }
}
</style>
