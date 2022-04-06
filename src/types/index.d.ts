declare module "*.module.less" {
  const styles: { [className: string]: string };
  export default styles;
}

interface Column<Record> {
  field?: string;
  name?: string;
  render?: (value: any, record: Record, index: number) => ReactNode;
  onSort?: (field: string) => any;
}

interface ListData<T> {
  page: number;
  pageSize: number;
  total: number;
  list: T[];
}

interface HttpResult {
  data?: object | null;
  err?: string;
  msg?: string;
  code: number;
}

