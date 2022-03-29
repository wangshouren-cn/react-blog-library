import React, {
  ReactChildren,
  ReactElement,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import Tip from "../Tip";
import { FormStore } from "./classFormStore";
import formContext from "./formContext";
import styles from "./index.module.less";
/**
 * @description: 对于FormItem的子项，肯定有一个value和onChange属性，不能手动传递这两个属性，全部交由FormItem来传递
 * 也即不能写出<FormItem field="content"><Input onchange={onChange} value={value}/></FormItem>这样的代码
 */
const FormItem: React.FC<FormItemProps> = ({
  label,
  children,
  field,
  rules = [],
  className,
  ...props
}) => {
  const formStore: FormStore | null = useContext(formContext);

  useEffect(() => {
    formStore?.addRules(field, rules);
  }, []);

  useEffect(() => {
    formStore?.onValidated(
      field,
      (msg) =>
        setTipProps({
          msg,
          when: true,
        }),
      () =>
        setTipProps({
          msg: "",
          when: false,
        })
    );
  }, []);

  const [tipProps, setTipProps] = useState({
    when: false,
    msg: "",
  });

  if (!formStore) {
    console.error("FormItem:未获取到formStore", formStore);
    return null;
  }

  return (
    <div className={styles["form-item"] + " " + className} {...props}>
      {label ? `${label} ` : ""}

      <Tip {...tipProps}>
        {formStore.createBoundChild(children as ReactElement, field)}
      </Tip>
    </div>
  );
};

export default FormItem;
