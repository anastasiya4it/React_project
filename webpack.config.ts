// const path = require("path");
// const HTMLWebpackPlugin = require("html-webpack-plugin");
// const webpack = require("webpack");
import type { Configuration } from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";
import path from "path";
import webpack from "webpack";
// import HTMLWebpackPlugin from "html-webpack-plugin";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
  };
  const PORT = env.port || 3000;
  // module.exports = { // убираем, потому что установлен флаг "esModuleInterop":true,
  const сonfig: Configuration = buildWebpackConfig({
    mode: env.mode || "development",
    paths,
    port: PORT,
  });
  return сonfig;
};
