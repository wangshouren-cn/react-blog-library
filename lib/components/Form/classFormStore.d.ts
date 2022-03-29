import { ReactElement } from "react";
export declare class FormStore<T = any> implements FormStoreInterface {
    /**
     * @description: 存放表单数据值
     */
    store: T;
    /**
     * @description: 执行后可以刷新表单，实现双向数据绑定
     */
    reRender: Function;
    /**
     * @description: 存放校验规则的map，key是field，value是规则数组
     */
    rulesMap: Map<string, Rule[]>;
    /**
     * @description: 存储验证失败时的回调，key是field，value是{onSuccess,onFailed}
     * @param {*}
     * @return {*}
     */
    onValidatedCallbackMap: Map<string, {
        onSuccess: () => any;
        onFailed: (reason: string) => any;
    }>;
    constructor(reRender: Function);
    getValues(): T;
    /**
     * @description: 设置值以后会重新刷新页面数据
     * @param {any} values
     * @return {*}
     */
    setValues(values: T | any): void;
    setValue(field: string, value: any): void;
    getValue(field: string): any;
    addRules(field: string, rules: any): void;
    /**
     * @description: 验证所有字段，验证成功返回true，失败返回提示数组，validateAll还有个作用就是可以删除无用的数据项
     * 因为有用的字段都在rulesMap里（FormItem做的）添加了
     * @param {string} field
     * @return {*}
     */
    validateAll(): true | string[];
    /**
     * @description: 验证单个字段，验证成功返回true，失败返回提示
     * @param {string} field
     * @return {*}
     */
    validate(field: string): string | true;
    /**
     * @description: FormItem调用，为children增加value和onChange
     * @param {*}
     * @return {*}
     */
    createBoundChild(children: ReactElement, field: string): ReactElement;
    onValidated(field: string, onFailed: (reason: string) => any, onSuccess: () => any): void;
    reset(): this;
}
