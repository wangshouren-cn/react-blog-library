/**
 * @description: 获取差集，结果为Set
 * @param {*}
 * @return {*}
 */
export default function getExceptSet<T = any>(
  small: Iterable<T>,
  big: Iterable<T>
) {
  const smallSet = small instanceof Set ? small : new Set<T>(small),
    bigSet = big instanceof Set ? big : new Set<T>(big),
    exceptSet = new Set<T>();

  bigSet.forEach((item) => {
    if (smallSet.has(item)) {
      smallSet.delete(item);
    } else {
      exceptSet.add(item);
    }
  });

  return exceptSet;
}
/**
 * @description: 获取差集，结果为Array
 * @param {*}
 * @return {*}
 */
export const getExceptArray = <T = any>(
  small: Iterable<T>,
  big: Iterable<T>
) => [...getExceptSet(small, big)];
