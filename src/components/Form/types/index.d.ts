interface FormStoreInterface {
  store: any;
  reRender: Function;
  rulesMap: Map<string, Rule[]>;
  setValues: (values: any) => void;
  setValue: (field: string, value: any) => void;
  getValue: (field: string) => any;
  getValues: () => any;
  addRules: (field: string, rules: any) => void;
  validateAll: () => string[] | true;
  validate: (field: string) => string | true;
  createBoundChild: (
    children: import("react").ReactElement,
    field: string
  ) => import("react").ReactElement;
  onValidatedCallbackMap: Map<
    string,
    { onSuccess: () => any; onFailed: (reason: string) => any }
  >;
  onValidated: (
    field: string,
    onFailed: (reason: string) => any,
    onSuccess: () => any
  ) => any;
  reset: () => FormStoreInterface;
}

interface FormProps extends HTMLAttributes {
  formStore?: FormStoreInterface;
  initialValues?: object;
}

interface Rule {
  required?: boolean;
  reg?: RegExp;
  msg?: string;
}

type HTMLAttributes = import("react").HTMLAttributes<any>;

interface FormItemProps extends HTMLAttributes {
  values?: any;
  setValues?: (value: any) => void;
  field: string;
  label?: string;
  onValuesChange?: (field: string, newValue: any) => void;
  rules?: Rule[];
  formStore?: FormStoreInterface;
  defaultValue?: any;
}
