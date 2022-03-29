export const isTrue = (value: any): boolean => {
  return typeof value === "boolean" && value;
};

export const isObject = (value: any): boolean => {
  return Object.prototype.toString.call(value) === "[object Object]";
};

export const isValidString = (value: any): boolean => {
  return typeof value === "string" && value.length > 0;
};

export const isNumber = (value: any): boolean => {
  return typeof value === "number";
};
