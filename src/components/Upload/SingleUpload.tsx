import React, {
  ChangeEvent,
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Img from "../Img";
import styles from "./index.module.less";
//@ts-ignore
export interface SingleUploadProps extends HTMLAttributes {
  value?: ImgFile | null;
  onChange?: (v: ImgFile | null) => any;
  transformer: (formData: FormData) => Promise<ImgFile>;
}
const SingleUpload: React.FC<SingleUploadProps> = ({
  value,
  onChange,
  transformer,
}) => {
  useEffect(() => {
    setImgFile(value);
  }, [value]);

  const [imgFile, setImgFile] = useState(value);

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

      setImgFile(imgFile);

      onChange && onChange(imgFile);
    },
    []
  );

  const handleDelete = useCallback(() => {
    setImgFile(null);
  }, []);

  return imgFile ? (
    <span className={styles["img-container"]}>
      <Img
        className={styles["img"]}
        onClick={() => window.open(imgFile.url)}
        src={imgFile.url}
      />
      <span onClick={handleDelete} className={styles["delete"]}>
        ×
      </span>
    </span>
  ) : (
    <span onClick={addFile} className={styles["add"]}>
      +
      <input
        onChange={handleFileChange}
        ref={ref}
        className={styles["input"]}
        type="file"
      />
    </span>
  );
};
export default SingleUpload;
