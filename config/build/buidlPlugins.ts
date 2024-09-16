import path from "node:path";
import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import type { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPlugins(
  { paths }: BuildOptions,
  isDev: boolean
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
    new BundleAnalyzerPlugin({ openAnalyzer: false }), //{ openAnalyzer: false }
  ];
}
webpack;
