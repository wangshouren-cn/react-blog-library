import React, {
  MutableRefObject,
  ReactElement,
  ReactNode,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import react, { useEffect } from "react";
import styles from "./index.module.less";

export interface TipProps extends HTMLAttributes {
  msg: ReactNode;
  when: boolean | "hover";
  
}

const Tip: React.FC<TipProps> = ({
  msg,
  when,
  children,
  className,
}: TipProps) => {
  const initState = useMemo(() => {
    if (typeof when === "boolean") return when;
    return false;
  }, []);

  const [state, setState] = useState(initState);

  useEffect(() => {
    if (typeof when === "boolean") setState(when as any);
  }, [when]);

  return (
    <div
      onMouseEnter={when === "hover" ? (e: any) => setState(true) : undefined}
      onMouseLeave={when === "hover" ? (e: any) => setState(false) : undefined}
      className={
        styles["tip-container"] +
        " " +
        (typeof className === "string" ? className : "")
      }
    >
      {children}
      {state && (
        <div className={styles["tip"]}>
          <span className={styles["triangle"]}></span>
          {msg}
        </div>
      )}
    </div>
  );
};

export default React.memo(Tip);
