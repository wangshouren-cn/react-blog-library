import React, { ReactNode } from "react";
export interface TipProps extends HTMLAttributes {
    msg: ReactNode;
    when: boolean | "hover";
}
declare const _default: React.NamedExoticComponent<TipProps>;
export default _default;
