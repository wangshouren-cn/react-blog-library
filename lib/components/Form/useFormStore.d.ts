import { FormStore } from "./classFormStore";
/**
 * @description: 创建formStore的工厂hooks 泛型T表示表单里的数据类型
 * @param {FormStore} formStore
 * @return {*}
 */
declare const useFormStore: <T = any>(formStore?: FormStore<T> | undefined) => FormStore<T>[];
export default useFormStore;
