import React, {
  TextareaHTMLAttributes,
  useCallback,
  useEffect,
  useState,
} from "react";
export interface TextAreaProps extends TextareaHTMLAttributes<any> {
  value?: string;
  onChange?: (v: any) => void;
}
const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  defaultValue = "",
}) => {
  /**
   * @description: hooks states:
   */
  const [state, setState] = useState(defaultValue);

  /**
   * @description: hooks callbacks:
   */
  useEffect(() => {
    if (value != null) setState(value);
  }, [value]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;

      setState(newValue);

      onChange && onChange(newValue);
    },
    [onChange]
  );

  /**
   * @description: hooks objects:
   */

  /**
   * @description: other:
   */

  return (
    <>
      <textarea
        onChange={handleChange}
        value={state}
      />
    </>
  );
};
export default TextArea;
