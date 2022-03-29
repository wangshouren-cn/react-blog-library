import React from "react";
import { ReactElement } from "react";
import { isObject, isTrue } from "@/utils";

export class FormStore<T = any> implements FormStoreInterface {
  /**
   * @description: 存放表单数据值
   */
  store: T = {} as T;

  /**
   * @description: 执行后可以刷新表单，实现双向数据绑定
   */
  reRender: Function;

  /**
   * @description: 存放校验规则的map，key是field，value是规则数组
   */
  rulesMap: Map<string, Rule[]> = new Map();

  /**
   * @description: 存储验证失败时的回调，key是field，value是{onSuccess,onFailed}
   * @param {*}
   * @return {*}
   */
  onValidatedCallbackMap: Map<
    string,
    { onSuccess: () => any; onFailed: (reason: string) => any }
  > = new Map();

  constructor(reRender: Function) {
    this.reRender = reRender;
  }
  getValues(): T {
    return this.store;
  }

  /**
   * @description: 设置值以后会重新刷新页面数据
   * @param {any} values
   * @return {*}
   */
  setValues(values: T | any) {
    this.store = { ...this.store, ...values };
    this.reRender();
  }

  setValue(field: string, value: any) {
    (this.store as any)[field] = value;
    this.reRender();
  }

  getValue(field: string) {
    return (this.store as any)[field];
  }

  addRules(field: string, rules: any) {
    const oldRules = this.rulesMap.get(field) || [];

    const newRules = [...oldRules, ...rules];

    this.rulesMap.set(field, newRules);
  }

  /**
   * @description: 验证所有字段，验证成功返回true，失败返回提示数组，validateAll还有个作用就是可以删除无用的数据项
   * 因为有用的字段都在rulesMap里（FormItem做的）添加了
   * @param {string} field
   * @return {*}
   */
  validateAll() {
    const msgs: string[] = [];

    for (const key of Object.keys(this.store)) {
      if (!this.rulesMap.has(key)) delete (this.store as any)[key];
    }

    for (const field of this.rulesMap.keys()) {
      const result = this.validate(field);
      if (result !== true) {
        msgs.push(result);
      }
    }

    return msgs.length === 0 ? true : msgs;
  }

  /**
   * @description: 验证单个字段，验证成功返回true，失败返回提示
   * @param {string} field
   * @return {*}
   */
  validate(field: string) {
    const value = this.getValue(field),
      rules = this.rulesMap.get(field) || [];

    console.log("field", field);
    console.log("rules", rules);

    for (const rule of rules) {
      const { required, msg, reg } = rule;

      if (typeof required === "boolean" && (value == null || value === "")) {
        return msg || `${field}不能为空`;
      }

      if (reg && !reg.test(value)) {
        return msg || `输入内容不符合规范`;
      }
    }

    return true;
  }

  /**
   * @description: FormItem调用，为children增加value和onChange
   * @param {*}
   * @return {*}
   */
  createBoundChild(children: ReactElement, field: string): ReactElement {
    let child = React.Children.only(children) as ReactElement;

    return React.cloneElement(child, {
      ...child.props,
      value: this.getValue(field),
      onChange: (v: any) => {
        this.setValue(field, v);

        const res = this.validate(field);

        const { onFailed, onSuccess } =
          this.onValidatedCallbackMap.get(field) || {};

        if (!isTrue(res)) {
          onFailed && onFailed(res as string);
        } else {
          onSuccess && onSuccess();
        }
      },
    });
  }

  onValidated(
    field: string,
    onFailed: (reason: string) => any,
    onSuccess: () => any
  ) {
    this.onValidatedCallbackMap.set(field, {
      onFailed,
      onSuccess,
    });
  }

  reset() {
    this.store = {} as T;
    this.rulesMap.clear();
    return this;
  }
}
