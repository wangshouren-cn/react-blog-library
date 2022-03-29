import React, { useCallback } from "react";

import styles from "./index.module.less";
export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: "danger" | "default" | "success";
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  disabled,
  type = "default",
}) => {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      onClick && onClick(e);

      return false;
    },
    [onClick]
  );

  return (
    <button
      onClick={handleClick}
      className={
        styles.button +
        " " +
        (className || "") +
        " " +
        (disabled && typeof disabled === "boolean" ? styles["disabled"] : "") +
        " " +
        styles[type]
      }
      type="button"
    >
      {children}
    </button>
  );
};
export default React.memo(Button);
