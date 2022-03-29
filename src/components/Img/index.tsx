import React, { ImgHTMLAttributes } from "react";
interface ImgProps extends ImgHTMLAttributes<any> {}
const Img: React.FC<ImgProps> = (props) => {
  return <img width={50} {...props} />;
};
export default Img;
