<script setup lang="ts">
import { isArray } from '@/utils/types';
import { ElTable } from 'element-plus';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { TableColumnProp } from './';
const { tableProps, tableData } = defineProps<{
  tableProps: TableColumnProp[];
  tableData: any[];
}>();

const tableRef = ref<InstanceType<typeof ElTable>>();
function clickRow({ key }: KeyboardEvent) {
  if (key === 'Enter' && document.activeElement instanceof HTMLDivElement) {
    document.activeElement.click();
  }
}
onMounted(() => {
  tableRef.value?.$el.addEventListener('keyup', clickRow);
});
onBeforeUnmount(() => {
  tableRef.value?.$el.removeEventListener('keyup', clickRow);
});
</script>
<template>
  <ElTable
    ref="tableRef"
    :data="tableData"
    :header-cell-class-name="$style.header"
    v-bind="$attrs"
    highlight-current-row
  >
    <ElTableColumn
      v-for="(col, cIndex) in tableProps"
      :prop="col.prop"
      :label="col.label"
      v-bind="col.attrs"
    >
      <template v-slot="{ row }">
        <div v-bind="cIndex === 0 ? { tabindex: 0 } : {}">
          {{
            isArray(row[col.prop]) ? row[col.prop].join(', ') : row[col.prop]
          }}
        </div>
      </template>
    </ElTableColumn>
  </ElTable>
</template>
<style module>
.header {
  background-color: var(--el-table-row-hover-bg-color) !important;
  color: var(--el-color-primary);
  font-size: 14px;
}
</style>
