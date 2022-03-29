import React, { useCallback, useEffect, useState } from "react";
import { isTrue } from "@/utils";
import styles from "./index.module.less";
interface TagProps extends HTMLAttributes {
  value: string;

  /**
   * @description: 是否处于选中状态
   */
  active?: boolean;

  /**
   * @description: 传入这个参数表示选中状态能够被改变
   * @param {*}
   * @return {*}
   */
  onActiveChange?: (isActive: boolean) => any;
}
const Tag: React.FC<TagProps> = ({
  value,
  onActiveChange,
  active = false,
  className = "",
  onClick,
  ...props
}) => {
  const [isActive, setIsActive] = useState(active);

  const handleClick = useCallback(
    (e) => {
      onClick && onClick(e);

      if (!onActiveChange) return;

      const active = !isActive;

      setIsActive(active);

      onActiveChange(active);
    },
    [isActive, onActiveChange, onClick]
  );

  useEffect(() => {
    setIsActive(active);
  }, [active]);

  return (
    <span
      onClick={handleClick}
      className={
        styles["tag"] +
        " " +
        className +
        " " +
        (isActive ? styles["active"] : "")
      }
      {...props}
    >
      {value}
    </span>
  );
};
export default Tag;
