/**
 * 菜单组件
 * 属性 data 接收一个 RecursiveMenuData 类型的数据
 * 生成菜单栏, 兼容 el-menu 属性
 */
import index from './index.vue';
import { cloneDeepWith } from 'lodash-es';
import { isObject } from '@/utils/types';
import router from '@/router';

import type { RouteRecordRaw } from 'vue-router';

export default index;

export interface RecursiveMenuData {
  index: string;
  title: string;
  children?: RecursiveMenuData[];
  onClick?(...args: unknown[]): unknown;
}

/**
 * 将 RouteRecordRow[] 类型的数据转换为 RecursiveMenuData[] 类型的数据
 */
export function MenuRouteAdaptor(data: RouteRecordRaw[]): RecursiveMenuData[] {
  return cloneDeepWith(data, (value) => {
    if (isObject(value)) {
      return {
        index: value.path,
        title: value.title,
        children: MenuRouteAdaptor(value.children),
        onClick: () => !(value.children?.length > 0) && router.push(value.path),
      };
    }
  });
}
