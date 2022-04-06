import React, { HTMLAttributes } from "react";
import 'highlight.js/styles/a11y-light.css';
import 'highlight.js/styles/default.css';
export interface LookProps extends HTMLAttributes<any> {
    markdown: string;
}
declare const Look: React.FC<LookProps>;
export default Look;
