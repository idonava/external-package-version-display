import type { Options } from "tsup";
import { dependencies, devDependencies } from "./package.json";

const config: Options = {
  entry: ["src/index.ts"],
  dts: true,
  sourcemap: true,
  format: ["cjs"],
  external: Object.keys(dependencies).concat(Object.keys(devDependencies)),
};

export default config;
