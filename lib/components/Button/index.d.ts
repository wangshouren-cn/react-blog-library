import React from "react";
export interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    type?: "danger" | "default" | "success";
}
declare const _default: React.NamedExoticComponent<ButtonProps>;
export default _default;
