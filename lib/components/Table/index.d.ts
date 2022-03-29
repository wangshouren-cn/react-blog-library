import { FC } from "react";
export declare type TableProps = {
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
declare const Table: FC<TableProps>;
export default Table;
