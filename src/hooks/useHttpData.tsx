import { useCallback, useRef, useState } from "react";
import useForceUpdate from "./useForceUpdate";

export default function <Data>(api: (...args: any[]) => Promise<Data>) {
  const forceUpdate = useForceUpdate();

  /**
   * @description:执行这个函数可以获取数据
   * @param {*}
   * @return {*}
   */

  const run: (...args: any[]) => Promise<Data> = useCallback(
    async (...args) => {
      const state = ref.current;

      Object.assign(state, { loading: true });

      forceUpdate();

      let newData = {},
        error;

      try {
        newData = await api(...args);
      } catch (e) {
        error = e;
      }

      Object.assign(state.data, newData);

      Object.assign(state, { error, loading: false });

      forceUpdate();

      return state.data as Data;
    },
    []
  );

  const ref = useRef<{
    loading: boolean;
    run: (...args: any[]) => Promise<Data>;
    data: Data;
    error: any;
  }>({
    loading: false,
    run,
    data: {} as Data,
    error: null,
  });

  return ref.current;
}
