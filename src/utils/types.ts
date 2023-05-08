/**
 * 包含类型获取, 类型判断相关方法
 */

/**
 * 获取值类型
 * @param {unknown} value 待获取类型的值
 * @returns {string} 返回获取的类型
 * @example
 * ```javascript
 * getType({})
 * // output: 'Object'
 * ```
 */
export function getType(value: unknown): string {
  return Object.prototype.toString.call(value).slice(8, -1);
}

/**
 * 判断值是否为某类型
 * @param {unknown} value 待获取类型的值
 * @param {string} type 判断的类型
 * @returns {string} 返回获取的类型
 * @example
 * ```javascript
 * is({}, 'Object')
 * // output: true
 * ```
 */
export function is(value: unknown, type: string): boolean {
  return getType(value) === type;
}

/**
 * 判断值是否为 Object 类型
 */
export function isObject(value: unknown): boolean {
  return is(value, 'Object');
}

/**
 * 判断值是否为 Array 类型
 */
export function isArray(value: unknown): boolean {
  return Array.isArray(value);
}
