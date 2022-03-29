import React from "react";
interface LoginProps extends React.HTMLAttributes<any> {
    api: (values: {
        username: string;
        password: string;
    }) => Promise<{
        token: string;
    } & (Admin | User)>;
    onLogined: (token: string, user: Admin | User) => any;
}
declare const _default: React.NamedExoticComponent<LoginProps>;
export default _default;
