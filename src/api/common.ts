import http from ".";

export function upload(formData: FormData) {
  return http.post<any,ImgFile>("/common/upload", formData, {
    headers: {
      "Content-type": "multipart/form-data",
    },
  });
}
