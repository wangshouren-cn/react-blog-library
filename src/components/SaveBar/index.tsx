import dayjs, { Dayjs } from "dayjs";
import React, { useLayoutEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import formatTimeStrap from "@/utils/formatTimeStrap";
import Button from "../Button";

import styles from "./index.module.less";

export interface SaveBarProps {
  onSave?: () => void;
  onRefresh?: () => void;
  showBack?: boolean;
  lastSaveTime?: number;
}

const SaveBar: React.FC<SaveBarProps> = ({
  lastSaveTime,
  onSave,
  onRefresh,
  showBack = false,
}) => {
  let [_, setCount] = useState<number>(1);

  const navigate = useNavigate();

  useLayoutEffect((i = 1) => {
    const timer = setInterval(() => {
      setCount(++i);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={styles["save-bar"]}>
      <div className={styles["left"]}>
        <span>现在时间：{dayjs().format("HH:mm:ss")}</span>
        {lastSaveTime ? (
          <span className={styles["last-save-time"]}>
            {" "}
            上次保存时间：{formatTimeStrap(lastSaveTime)}
          </span>
        ) : (
          ""
        )}
      </div>
      <div className={styles["right"]}>
        {onRefresh ? (
          <Button className={styles["btn"]} onClick={onRefresh}>
            刷新
          </Button>
        ) : null}
        {onSave ? (
          <Button type="success" className={styles["btn"]} onClick={onSave}>
            保存
          </Button>
        ) : null}
        {showBack ? (
          <Button
            type="danger"
            className={styles["btn"]}
            onClick={() => navigate(-1)}
          >
            返回
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default React.memo(SaveBar);
