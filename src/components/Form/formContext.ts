import React from "react";
import { FormStore } from "./classFormStore";

const formContext = React.createContext<FormStore | null>(null);
export default formContext;
