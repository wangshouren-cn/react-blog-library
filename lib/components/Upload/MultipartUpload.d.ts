import React from "react";
export interface MultipartUploadProps extends HTMLAttributes {
    value?: ImgFile[] | null;
    onChange?: (v: ImgFile[] | null) => any;
    transformer: (formData: FormData) => Promise<ImgFile>;
    defaultValue?: ImgFile[];
    max: number;
}
declare const MultipartUpload: React.FC<MultipartUploadProps>;
export default MultipartUpload;
