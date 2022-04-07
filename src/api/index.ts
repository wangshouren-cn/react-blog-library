import axios from "axios";
import { isObject, isValidString, Message } from "@/index";

const http = axios.create({
  timeout: 5000,
  // baseURL: "http://192.168.2.101:7001",
  // baseURL: "http://121.4.95.151:7001",
  baseURL: "https://wangshouren.cool:7001",
  withCredentials: true,
});

/**
 * @description: 请求拦截
 */
http.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (config && token && config.headers && isValidString(token)) {
    config.headers["Authorization"] = token;
  }

  return config;
});

/**
 * @description: 响应拦截
 */
http.interceptors.response.use((response) => {
  const { data: result } = response;

  if (!isObject(result)) return null;

  const { code, msg, data, err } = result as HttpResult;

  if (code === 0) {
    if (isValidString(msg)) Message.success(msg as string);
    return data;
  }

  let message = isValidString(msg) ? msg : err;

  if (code !== 0 && isValidString(message)) {
    Message.error(message as string);
  }
});

export default http;
export * from "./admin";
export * from "./article";
export * from "./category";
export * from "./comment";
export * from "./common";
export * from "./tag";
