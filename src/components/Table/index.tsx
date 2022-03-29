import { FC, ReactNode, useCallback, useMemo } from "react";
import { isValidString, } from "@/utils";
import {useForceUpdate} from "@/hooks";
import Button from "../Button";
import ButtonWithInput from "../ButtonWithInput";
import Input from "../Input";
import Tip from "../Tip";

import styles from "./index.module.less";

export type TableProps = {
  /**
   * @description: 列配置
   */
  columns: Column<any>[];

  /**
   * @description: 数据集
   */
  records: any[];

  /**
   * @description: 生成tr时所用的key，为数据项的某个键
   */
  trKey: string;

  page: number;

  pageSize: number;

  total: number;

  onPageChange: (page: number, lastPage: number) => any;
};

const Table: FC<TableProps> = ({
  columns,
  records,
  trKey,
  page,
  pageSize,
  total,
  onPageChange,
}) => {
  const renderValue = useCallback(
    (
      value: any,
      record: any,
      index: number,
      render:
        | ((value: any, record: any, index: number) => ReactNode)
        | undefined
    ) => {
      const holder = "——";

      if (typeof render === "function") {
        return render(value, record, index) || holder;
      }

      if (Array.isArray(value) && value.length === 0) {
        return holder;
      }

      return value == null ? holder : value;
    },
    []
  );

  const totalPage = useMemo(
    () => Math.ceil(total / pageSize),
    [total, pageSize]
  );

  const forceUpdate = useForceUpdate();

  return (
    <>
      {records.length > 0 ? (
        <table className={styles["table"]}>
          <thead className={styles["thead"]}>
            <tr className={styles["tr"]}>
              {columns.map(({ field, name, onSort }: Column<any>, index) => (
                <th className={styles["th"]} key={field || name || index}>
                  {typeof onSort === "function" && field ? (
                    <Tip msg="点击可以进行排序" when="hover">
                      <strong
                        onClick={() => onSort(field)}
                        className={styles["can-sort"]}
                      >
                        {name}
                      </strong>
                    </Tip>
                  ) : (
                    name
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {records.map((record: any, index) => (
              <tr className={styles["tr"]} key={record[trKey]}>
                {columns.map(({ field, render, name }: Column<any>, index) => (
                  <td className={styles["td"]} key={field || name || index}>
                    {renderValue(
                      field && isValidString(field) ? record[field] : null,
                      record,
                      index,
                      render
                    )}
                  </td>
                ))}
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </table>
      ) : (
        <div className={styles["empty"]}>空空如也</div>
      )}
      {records.length > 0 ? (
        <div className={styles["footer"]}>
          <span className={styles["description"]}>
            当前第 <strong>{page}</strong> 页，共 <strong>{totalPage}</strong>{" "}
            页，共 <strong>{total}</strong> 条数据。
          </span>
          <div className={styles["operations"]}>
            {" "}
            <Button
              onClick={() => onPageChange(1, page)}
              disabled={page === 1}
              className={styles["button"]}
            >
              第一页
            </Button>
            <Button
              onClick={() => onPageChange(page + 1, page)}
              disabled={totalPage <= page}
              className={styles["button"]}
            >
              下一页
            </Button>
            <Button
              onClick={() => onPageChange(totalPage, page)}
              disabled={totalPage <= page}
              className={styles["button"]}
            >
              尾页
            </Button>
            <ButtonWithInput
              inputType="number"
              max={totalPage}
              min={1}
              onButtonClick={(e, value) =>
                Number(value) && onPageChange(Number(value), page)
              }
              disabled={totalPage <= 1}
            >
              跳转到
            </ButtonWithInput>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Table;
