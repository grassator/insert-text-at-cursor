import { uglify } from "rollup-plugin-uglify";
import babel from "rollup-plugin-babel";

const isProduction = process.env.NODE_ENV === "production";

export default [
  {
    input: "index.js",
    output: {
      file: `dist/index.umd${isProduction ? ".min" : ""}.js`,
      format: "umd",
      name: "insertTextAtCursor",
      sourcemap: true
    },
    plugins: [babel(), isProduction && uglify()]
  },
  {
    input: "index.js",
    output: {
      file: "dist/index.esm.js",
      format: "es",
      name: "insertTextAtCursor",
      sourcemap: true
    },
    plugins: [babel()]
  }
];
