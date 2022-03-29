/**
 * @description: 可以设置和获取url上的参数，设置值时会对window上的url进行处理
 * @param {string} initialSearch
 * @return {*}
 */
export default function <T = any>(initialSearch: string | T): [T, (newSearch: T) => any];
export declare const stringifySearch: (search: {
    [key: string]: string;
}) => string;
export declare const parseSearch: (str?: string) => any;
