import { useRef, useState } from "react";
import { FormStore } from "./classFormStore";

/**
 * @description: 创建formStore的工厂hooks 泛型T表示表单里的数据类型
 * @param {FormStore} formStore
 * @return {*}
 */
const useFormStore = <T = any>(formStore?: FormStore<T> | undefined) => {
  const formRef = useRef<FormStore<T> | null>(null);

  const [_, setState] = useState<any>();

  if (!formRef.current) {
    formRef.current = formStore
      ? formStore.reset()
      : new FormStore<T>(() => setState({}));
  }

  return [formRef.current];
};

export default useFormStore;
