import React from "react";

import styles from "./index.module.less";

interface ValidTipProps {
  isValid: boolean | undefined;
}

const ValidTip: React.FC<ValidTipProps> = ({ isValid }: ValidTipProps) => {
  if (typeof isValid !== "boolean") return null;
  return isValid ? (
    <span className={styles["right"]}>😀</span>
  ) : (
    <span className={styles["wrong"]}>😟</span>
  );
};
export default React.memo(ValidTip);
