import React, { SelectHTMLAttributes, useCallback } from "react";

const Select: React.FC<SelectProps> = ({
  onChange,
  value,
  options,
  ...props
}) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onChange && onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <>
      <select onChange={handleChange} {...props}>
        {options?.map(({ value, label }) => {
          return (
            <option key={label} value={value}>
              {label}
            </option>
          );
        })}
      </select>
    </>
  );
};
export default Select;
