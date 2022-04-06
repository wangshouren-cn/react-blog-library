import React, { HTMLAttributes, useEffect, useRef } from "react";
import { mdParser } from "@/index";
import 'highlight.js/styles/a11y-light.css'
import 'highlight.js/styles/default.css'
export interface LookProps extends HTMLAttributes<any> {
  markdown: string
}
const Look: React.FC<LookProps> = ({ markdown }) => {

  const ref: any = useRef();

  useEffect(() => {

    if (markdown && ref.current) {
      ref.current.appendChild(
        document.createRange().createContextualFragment(mdParser.render(markdown))
      );
    }

  }, [markdown, ref.current]);


  return (
    <div className="custom-html-style" ref={ref}></div>
  );
};
export default Look;
