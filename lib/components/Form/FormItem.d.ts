import React from "react";
/**
 * @description: 对于FormItem的子项，肯定有一个value和onChange属性，不能手动传递这两个属性，全部交由FormItem来传递
 * 也即不能写出<FormItem field="content"><Input onchange={onChange} value={value}/></FormItem>这样的代码
 */
declare const FormItem: React.FC<FormItemProps>;
export default FormItem;
