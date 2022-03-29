import React from "react";
export interface SingleUploadProps extends HTMLAttributes {
    value?: ImgFile | null;
    onChange?: (v: ImgFile | null) => any;
    transformer: (formData: FormData) => Promise<ImgFile>;
}
declare const SingleUpload: React.FC<SingleUploadProps>;
export default SingleUpload;
