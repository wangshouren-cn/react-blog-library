import React, { useCallback } from "react";

import styles from "./index.module.less";
import {
  Button,
  Form,
  FormItem,
  Input,
  isTrue,
  Message,
  useFormStore,
} from "@/index";

interface LoginProps extends React.HTMLAttributes<any> {
  api: (values: {
    username: string;
    password: string;
  }) => Promise<{ token: string } & (Admin | User)>;
  onLogined: (token: string, user: Admin | User) => any;
}

const FunctionComponent: React.FC<LoginProps> = ({ api, onLogined }) => {
  const [formStore] = useFormStore();
  const handleClick = async () => {
    const msgs = formStore.validateAll();

    if (isTrue(msgs)) {
      const res = await api(formStore.getValues());
      if (res) {
        const { token, ...user } = res;
        onLogined(token, user);
        // localStorage.setItem("token", token);
        // window.location.reload();
      }
    } else {
      Message.error((msgs as string[]).join("；"));
    }
  };

  const onPasswordKeydown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleClick();
    }
  }, []);

  return (
    <Form formStore={formStore} className={styles["login"]}>
      <h1 className={styles["title"]}>login</h1>
      <FormItem
        // defaultValue={"132"}
        rules={[
          {
            required: true,
            reg: /([a-z0-9]){6,10}/i,
            msg: "用户名是只包含a-z、0-9的任意组合，且长度为6~18位",
          },
        ]}
        className={styles["form-item"]}
        label="Username"
        field="username"
      >
        <Input />
      </FormItem>
      <FormItem
        // defaultValue={"132"}
        className={styles["form-item"]}
        label="Password"
        field="password"
        rules={[
          {
            required: true,
          },
          {
            required: true,
            reg: /([a-z0-9]){6,10}/i,
            msg: "密码是只包含a-z、0-9的任意组合，且长度为6~18位",
          },
        ]}
      >
        <Input onKeyDown={onPasswordKeydown} type="password" />
      </FormItem>
      <Button type="success" className={styles["button"]} onClick={handleClick}>
        login
      </Button>
    </Form>
  );
};
export default React.memo(FunctionComponent);
