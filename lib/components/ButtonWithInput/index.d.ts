import React from "react";
import { FC } from "react";
import { InputType } from "../Input";
export interface InputWithButtonProps extends HTMLAttributes {
    onButtonClick?: (e: React.MouseEvent<HTMLButtonElement>, value: string) => any;
    disabled?: boolean;
    inputType?: InputType;
    max?: number;
    min?: number;
    buttonPos?: "left" | "right";
    onChange?: (value: string) => any;
    placeholder?: string;
    autoClear?: boolean;
}
/**
 * @description: children是渲染到Button里的值
 * @param {*}
 * @return {*}
 */
declare const InputWithButton: FC<InputWithButtonProps>;
export default InputWithButton;
