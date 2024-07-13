// const path = require("path");
// const HTMLWebpackPlugin = require("html-webpack-plugin");
// const webpack = require("webpack");
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildPaths } from "./config/build/types/config";
import path from "path";
// import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
};
// module.exports = { // убираем, потому что установлен флаг "esModuleInterop":true,
const сonfig: webpack.Configuration = buildWebpackConfig({
  mode: "development",
  paths,
});
export default сonfig;
