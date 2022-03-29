import React, { useEffect } from "react";
import formContext from "./formContext";
import useFormStore from "./useFormStore";
import FormItem from "./FormItem";
import styles from "./index.module.less";
import { isObject } from "@/utils";
import { FormStore } from "./classFormStore";
const Form: React.FC<FormProps> = ({
  children,
  formStore,
  className="",
  initialValues,
  ...props
}) => {
  useEffect(() => {
    initialValues && nativeForm.setValues(initialValues);
  }, []);

  const [nativeForm] = useFormStore(formStore);

  return (
    <form className={styles["form"] + " " + className} {...props}>
      <formContext.Provider value={nativeForm}>{children}</formContext.Provider>
    </form>
  );
};

export default React.memo(Form);
export { FormItem, useFormStore,FormStore };
