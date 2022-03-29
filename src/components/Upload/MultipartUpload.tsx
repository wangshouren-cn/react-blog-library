import React, {
  ChangeEvent,
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Img from "../Img";
import SingleUpload from "./SingleUpload";
import styles from "./index.module.less";
//@ts-ignore
export interface MultipartUploadProps extends HTMLAttributes {
  value?: ImgFile[] | null;
  onChange?: (v: ImgFile[] | null) => any;
  transformer: (formData: FormData) => Promise<ImgFile>;
  defaultValue?: ImgFile[];
  max: number;
}
const MultipartUpload: React.FC<MultipartUploadProps> = ({
  value,
  onChange,
  transformer,
  defaultValue = [],
  max,
}) => {
  /**
   * @description: states hooks
   */

  const [state, setState] = useState<ImgFile[]>(defaultValue);


  /**
   * @description: callbacks hooks
   */

  useEffect(() => {
    if (value != null) setState(value);
  }, [value]);

  const ref: MutableRefObject<any> = useRef(null);

  const addFile = useCallback(() => {
    if (!ref.current) return;

    ref.current.click();
  }, []);

  /**
   * @description:只有选中文件点击确定后才会触发，因此必有file
   * @param {*} useCallback
   * @return {*}
   */
  const handleFileChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      if (!ref.current) return;

      const file: File = ref.current.files[0];

      const formData = new FormData();

      formData.append(file.name, file);

      const imgFile = await transformer(formData);
      
      const newState = [...state, imgFile];

      setState(newState);

      onChange && onChange(newState);
    },
    [state]
  );

  const handleDelete = useCallback(() => {
    state.pop();
    setState([...state]);
  }, [state]);

  /**
   * @description: objects hooks
   */

  /**
   * @description: other
   */

  return (
    <>
      {state.map((imgFile) => {
        return (
          <span key={imgFile.uid} className={styles["img-container"]}>
            <Img
              className={styles["img"]}
              onClick={() => window.open(imgFile.url)}
              src={imgFile.url}
            />
            <span onClick={handleDelete} className={styles["delete"]}>
              ×
            </span>
          </span>
        );
      })}
      {max > state.length ? (
        <>
          <span onClick={addFile} className={styles["add"]}>
            +
            <input
              onChange={handleFileChange}
              ref={ref}
              className={styles["input"]}
              type="file"
            />
          </span>
        </>
      ) : null}
    </>
  );
};
export default MultipartUpload;
