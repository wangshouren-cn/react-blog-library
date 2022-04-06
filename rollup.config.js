import babel from "rollup-plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import styles from "rollup-plugin-styles";
import alias from "@rollup/plugin-alias";
import append from "./plugins/rollup-plugin-append-content";
import path from "path";
import json from '@rollup/plugin-json'
export default {
  input: "./src/index.ts",
  output: {
    file: "./lib/index.js",
    format: "es",
  },
  plugins: [
    append({
      target: /\.less$/,
      content: `@import "${path.join(__dirname, "./src/base.less")}";`,
      where: "first-line",
      showResult: 3
    }),
    alias({
      entries: { find: "@", replacement: "./src" },
    }),
    babel({
      exclude: /node_modules/,
      presets: [["@babel/env", { modules /* 不转换module */: false }]],
    }),
    resolve(),
    commonjs(),
    typescript(),
    styles({
      autoModules: /\.module.less$/,
    }),
    json(),
  ],
  external: ["react", "react-dom", "axios", "dayjs", "react-router-dom"],
};
