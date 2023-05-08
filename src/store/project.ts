import { defineStore } from 'pinia';

/**
 * 项目主要信息
 */
export const useMainStore = defineStore('project', {
  state: () => ({
    projectName: import.meta.env.VITE_PROJECT_NAME,
    author: '不知名名菜',
    description:
      '东方夜雀食堂工具箱',
  }),
});
