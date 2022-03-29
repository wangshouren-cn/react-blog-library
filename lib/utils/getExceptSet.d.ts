/**
 * @description: 获取差集，结果为Set
 * @param {*}
 * @return {*}
 */
export default function getExceptSet<T = any>(small: Iterable<T>, big: Iterable<T>): Set<T>;
/**
 * @description: 获取差集，结果为Array
 * @param {*}
 * @return {*}
 */
export declare const getExceptArray: <T = any>(small: Iterable<T>, big: Iterable<T>) => T[];
