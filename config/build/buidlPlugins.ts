import path from "node:path";
import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import type { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins(
  { paths }: BuildOptions,
  isDev: Boolean
): webpack.WebpackPluginInstance[] {
  return [
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
      template: paths.html,
      // path.resolve(__dirname, "public", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: ".css/[name].[contenthash:4].css",
      chunkFilename: ".css/[id].[contenthash:4].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
  ];
}
webpack;
