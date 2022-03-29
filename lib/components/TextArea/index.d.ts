import React, { TextareaHTMLAttributes } from "react";
export interface TextAreaProps extends TextareaHTMLAttributes<any> {
    value?: string;
    onChange?: (v: any) => void;
}
declare const TextArea: React.FC<TextAreaProps>;
export default TextArea;
