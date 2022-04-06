import React from "react";
import { FC, useCallback, useState } from "react";
import Button from "../Button";
import Input, { InputType } from "../Input";
import styles from "./index.module.less";

//@ts-ignore
export interface InputWithButtonProps extends HTMLAttributes {
  onButtonClick?: (
    e: React.MouseEvent<HTMLButtonElement>,
    value: string
  ) => any;
  disabled?: boolean;
  inputType?: InputType;
  max?: number;
  min?: number;
  buttonPos?: "left" | "right";
  onChange?: (value: string) => any;
  placeholder?: string;

  //点击button后清除输入框内容
  autoClear?:boolean
}

/**
 * @description: children是渲染到Button里的值
 * @param {*}
 * @return {*}
 */
const InputWithButton: FC<InputWithButtonProps> = ({
  children,
  disabled,
  max,
  min,
  inputType,
  onButtonClick,
  buttonPos = "left",
  onChange,
  placeholder,
  autoClear = true
}) => {
  const [value, setValue] = useState("");

  const handleChange = useCallback(
    (value: string) => {
      setValue(value);
      onChange && onChange(value);
    },
    [setValue, onChange]
  );

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      onButtonClick && onButtonClick(e, value);
      autoClear && setValue("");
    },
    [value,onButtonClick]
  );

  return (
    <span className={styles["container"]}>
      {buttonPos === "left" ? (
        <Button onClick={handleClick} disabled={disabled}>
          {children}
        </Button>
      ) : null}

      <Input
        placeholder={placeholder || ""}
        disabled={disabled}
        type={inputType}
        max={max}
        min={min}
        onChange={handleChange}
      />

      {buttonPos === "right" ? (
        <Button onClick={handleClick} disabled={disabled}>
          {children}
        </Button>
      ) : null}
    </span>
  );
};

export default InputWithButton;
