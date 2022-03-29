interface Apis {
    [name: string]: () => Promise<any>;
}
/**
 * @description: 这个hook可以处理并发请求，并将成功的api和失败的api分别存放在dataMap和errors中
 * @param {Apis} apis
 * @example: 在展示表格数据时，要将表格数据和搜索字段一起请求，之后在根据字段搜索的时候只需要请求表格数据就可以了
 * @return {*}
 */
export default function <DataMap>(apis: Apis): {
    loading: boolean;
    errors: any[];
    dataMap: DataMap;
    run: (apiKeys?: string[] | undefined) => Promise<[DataMap, any[]]>;
};
export {};
