import React, { ImgHTMLAttributes } from "react";
import styles from './index.module.less'
interface ImgProps extends ImgHTMLAttributes<any> { }
const Img: React.FC<ImgProps> = (props) => {
  return <img className={styles.image} width={50} {...props} />;
};
export default Img;
