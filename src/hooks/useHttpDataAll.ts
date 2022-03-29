import { useCallback, useRef, useState } from "react";
import useForceUpdate from "./useForceUpdate";

interface Apis {
  [name: string]: () => Promise<any>;
}

/**
 * @description: 这个hook可以处理并发请求，并将成功的api和失败的api分别存放在dataMap和errors中
 * @param {Apis} apis
 * @example: 在展示表格数据时，要将表格数据和搜索字段一起请求，之后在根据字段搜索的时候只需要请求表格数据就可以了
 * @return {*}
 */
export default function <DataMap>(apis: Apis) {
  /**
   * @description: 可以传入要请求的apiKeys（是由apis里的键组成的数组），其他的不请求的数据保持上一个状态
   */
  const run = useCallback(async (apiKeys?: string[]) => {
    let willFetchApis = apiKeys ? filterApis(apiKeys, apis) : apis;

    //用ref而不用state是为了保证返回的数据自始至终都指向同一个引用
    const state = ref.current;

    Object.assign(state, { loading: true });

    forceUpdate();

    const [partialDataMap, errors] = await fetchAll(willFetchApis);

    const dataMap = Object.assign(state.dataMap, partialDataMap) as DataMap;

    Object.assign(state, {
      dataMap,
      errors,
      loading: false,
    });

    forceUpdate();

    return [dataMap, errors];
  }, []);

  const filterApis = useCallback((apiKeys: string[], Apis) => {
    const result = {} as Apis;

    for (const key of apiKeys) {
      const api = Apis[key];
      if (typeof api === "function") result[key] = api;
    }

    return result;
  }, []);

  const fetchAll: (apis: Apis) => Promise<[DataMap, any[]]> = useCallback(
    /* async */ (apis) => {
      return new Promise((resolve) => {
        const dataMap: DataMap = {} as DataMap,
          errors: any[] = [],
          result: [DataMap, any[]] = [dataMap, errors];

        let times = Object.keys(apis).length;

        for (const [name, api] of Object.entries(apis)) {
          api().then(
            (data) => {
              (dataMap as any)[name] = data;
              if (--times === 0) resolve(result);
            },
            (err) => {
              errors.push(err);
              if (--times === 0) resolve(result);
            }
          );

          /* //这样写是串行的，但是想实现的是并行的效果
        try {
          dataMap[name] = await api();
        } catch (e) {
          errors.push(e);
        } */
        }
      });
    },
    [apis]
  );

  const ref = useRef<{
    loading: boolean;
    errors: any[];
    dataMap: DataMap;
    run: (apiKeys?: string[]) => Promise<[DataMap, any[]]>;
  }>({
    loading: false,
    errors: [],
    dataMap: {} as DataMap,
    run: run as any,
  });

  const forceUpdate = useForceUpdate();

  return ref.current;
}
