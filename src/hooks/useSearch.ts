import { useCallback, useMemo, useState } from "react";
import { isObject } from "@/utils";

/**
 * @description: 可以设置和获取url上的参数，设置值时会对window上的url进行处理
 * @param {string} initialSearch
 * @return {*}
 */
export default function <T = any>(
  initialSearch: string | T
): [T, (newSearch: T) => any] {
  const path = window.location.pathname;

  let defaultSearch = useMemo(() => {
    const defaultSearch = parseSearch(window.location.search);

    Object.assign(
      defaultSearch,
      typeof initialSearch === "string"
        ? parseSearch(initialSearch)
        : initialSearch
    );

    return defaultSearch;
  }, []);

  const [_search, _setSearch] = useState<T>(defaultSearch);

  const setSearch: (newSearch: T) => void = useCallback(
    (newSearch) => {
      _setSearch(newSearch);

      window.history.pushState(
        null,
        document.title,
        path + stringifySearch(newSearch as any)
      );
    },
    [_search]
  );

  return [_search, setSearch];
}
export const stringifySearch = (search: { [key: string]: string }) =>
  Object.entries(search).reduce(
    (str, [key, value]) => str + `${key}=${value || ""}&`,
    "?"
  );

export const parseSearch = (str: string = "") => {
  str = str.replace("?", "");

  const keyValueAry = str.split("&"); //["a=b","c="]

  let res = {} as any;

  for (const keyValue of keyValueAry) {
    const [key, value] = keyValue.split("=");

    if (!key) continue;

    res[key] = value;
  }

  return res;
};
