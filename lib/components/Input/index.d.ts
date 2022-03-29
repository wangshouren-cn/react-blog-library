import React, { InputHTMLAttributes, ReactElement } from "react";
export declare type InputType = "text" | "password" | "number";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    tip?: ReactElement;
    onChange?: (value: any) => any;
}
declare const FunctionComponent: React.FC<InputProps>;
export default FunctionComponent;
