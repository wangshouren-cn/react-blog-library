import React from "react";
import { FormStore } from "./classFormStore";
declare const formContext: React.Context<FormStore<any> | null>;
export default formContext;
