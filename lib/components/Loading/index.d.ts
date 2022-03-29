import React from "react";
export interface LoadingProps extends React.HTMLAttributes<any> {
    loading: boolean;
}
declare const Loading: React.FC<LoadingProps>;
export default Loading;
