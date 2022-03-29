import { useCallback, useMemo, useRef, useState } from "react";
import useForceUpdate from "./useForceUpdate";
import { parseSearch, stringifySearch } from "./useSearch";

export default function <Data, SearchParams>(
  api: (search: SearchParams) => Promise<ListData<Data>>,
  initialSearch: SearchParams = {} as SearchParams
): ListData<Data> & {
  loading: boolean;
  error: any;
  run: () => Promise<void>;
  search: SearchParams;
  setSearchAndRun: (partialSearch: SearchParams) => void;
  setSearch: (partialSearch: SearchParams) => void;
} {
  const forceUpdate = useForceUpdate();

  const path = window.location.pathname;

  let defaultSearch = useMemo(() => {
    const defaultSearch = parseSearch(window.location.search);

    Object.assign(defaultSearch, initialSearch);

    return defaultSearch;
  }, []);

  const setSearchAndRun: (partialSearch: SearchParams) => void = useCallback(
    (partialSearch) => {
      setSearch(partialSearch);

      run();
    },
    []
  );

  const setSearch: (partialSearch: SearchParams) => void = useCallback(
    (partialSearch: SearchParams) => {
      const search = ref.current.search;

      Object.assign(search, partialSearch);

      window.history.pushState(
        null,
        document.title,
        path + stringifySearch(partialSearch as any)
      );
    },
    []
  );

  /**
   * @description:执行这个函数可以获取数据
   * @param {*}
   * @return {*}
   */
  const run = useCallback(async () => {
    const state = ref.current;

    Object.assign(state, { loading: true });

    forceUpdate();

    let data = {},
      error;

    try {
      data = await api(state.search);
    } catch (e) {
      error = e;
    }

    //这里用...将data展开了，所以能拿到list
    Object.assign(state, { ...data, error, loading: false });

    forceUpdate();
  }, []);

  const ref = useRef<
    ListData<Data> & {
      loading: boolean;
      error: any;
      run: () => Promise<void>;
      search: SearchParams;
      setSearchAndRun: (partialSearch: SearchParams) => void;
      setSearch: (partialSearch: SearchParams) => void;
    }
  >({
    page: 1,
    pageSize: 20,
    loading: false,
    error: null,
    list: [],
    run,
    total: 0,
    search: defaultSearch,
    setSearchAndRun,
    setSearch,
  });

  return ref.current;
}
