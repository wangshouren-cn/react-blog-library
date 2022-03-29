import React from "react";
export interface LoadingProps extends React.HTMLAttributes<any> {
  loading: boolean;
}
const Loading: React.FC<LoadingProps> = ({ loading, children, ...props }) => {
  return loading ? <span {...props}>loading... </span> : <>{children}</>;
};
export default Loading;
