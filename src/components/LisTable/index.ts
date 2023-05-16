import LisTable from './LisTable.vue';
import { isArray, isString, isNumber } from '@/utils/types';
export default LisTable;

export type TableColumnProp = {
  label: string;
  prop: string;
  attrs?: {
    sortable?: boolean;
    width?: number;
    minWidth?: number;
    sortMethod?: Function;
    sortBy?: string;
  };
};

export function parseShortTableProps(value: {
  [key: string]: [
    string,
    {
      minWidth?: number;
      width?: number;
      sortable?: boolean;
      sortMethod?: Function;
    }?,
  ];
}) {
  return Object.entries(value).map(([prop, [label, attrs]]) => {
    function defaultSortMethod(x: any, y: any) {
      if (attrs?.sortMethod) return attrs.sortMethod(x, y);
      if (Array.isArray(x[prop])) {
        return x[prop].length - y[prop].length;
      } else if (isString(x[prop])) {
        return x[prop].localeCompare(y[prop]);
      } else if (isNumber(x[prop])) {
        return x[prop] - y[prop];
      }
      return 0;
    }
    return {
      prop,
      label,
      attrs: {
        ...attrs,
        sortable: attrs?.sortable ? attrs.sortable : true,
        sortMethod: defaultSortMethod,
      },
    };
  }) as TableColumnProp[];
}
