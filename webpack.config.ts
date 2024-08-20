import type { Configuration } from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import type { BuildEnv, BuildPaths } from "./config/build/types/config";
import path from "node:path";
import webpack from "webpack";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };
  const Port = env.port || 3000;
  // module.exports = { // убираем, потому что установлен флаг "esModuleInterop":true,
  const сonfig: Configuration = buildWebpackConfig({
    mode: env.mode || "development",
    paths,
    port: Port,
  });
  return сonfig;
};
