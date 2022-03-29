import React from "react";
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
declare const Tag: React.FC<TagProps>;
export default Tag;
