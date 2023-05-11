import LisTable from './LisTable.vue';
export default LisTable;

export function parseShortTableProps(value: {
  [key: string]: [string, { minWidth?: number; width?: number }?];
}) {
  return Object.entries(value).map(([prop, [label, style]]) => ({
    prop,
    label,
    style,
  }));
}
