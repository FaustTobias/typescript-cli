import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

export default {
    input: "src/index.ts",
    output: {
        file: "lib/index.js",
        format: "cjs",
    },
    plugins: [
        commonjs(),
        resolve({
            preferBuiltins: true,
        }),
        typescript({
            tsconfigOverride: {
                compilerOptions: {
                    module: "ESNext",
                },
            },
        }),
        terser(),
    ],
};
