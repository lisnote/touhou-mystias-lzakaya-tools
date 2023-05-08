import { defineStore } from 'pinia';

/**
 * 项目主要信息
 */
export const useMainStore = defineStore('project', {
  state: () => ({
    projectName: import.meta.env.VITE_PROJECT_NAME,
    author: 'lisnote',
    description:
      '东方夜雀食堂工具箱',
  }),
});
