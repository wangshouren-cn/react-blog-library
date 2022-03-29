import React, {
  ChangeEvent,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  MutableRefObject,
  ReactElement,
  useCallback,
  useState,
} from "react";
import { isNumber } from "@/utils";
import Message from "../Message";
import ValidTip from "../ValidTip";
import styles from "./index.module.less";

export type InputType = "text" | "password" | "number";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  tip?: ReactElement; //提示信息
  onChange?: (value: any) => any;
}

const FunctionComponent: React.FC<InputProps> = ({
  tip,
  onChange,
  ...props
}) => {
  const { max, min } = props;

  const nativeOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;

      if (isNumber(max) && Number(newValue) > (max as number)) {
        Message.error("数值太大了，不能超过 " + max);
        return;
      }

      if (isNumber(min) && Number(newValue) < (min as number)) {
        Message.error("数值太小了，不能小于 " + min);
        return;
      }

      onChange && onChange(newValue);
    },
    [max, min, onChange]
  );

  return (
    <>
      <input
        className={styles.input}
        onChange={nativeOnChange}
        {...props}
      ></input>
      {tip || null}
    </>
  );
};
export default FunctionComponent;
