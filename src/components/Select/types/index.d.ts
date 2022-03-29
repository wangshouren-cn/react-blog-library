interface Option {
  label: string;
  value: any;
}
type SelectHTMLAttributes = import("react").SelectHTMLAttributes<any>;

interface SelectProps extends SelectHTMLAttributes {
  onChange?: (value: any) => any;
  value?: any;
  options?: Option[];
}
