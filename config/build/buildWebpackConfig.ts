import type { BuildOptions } from "./types/config";
import { buildPlugins } from "./buidlPlugins";
import { buildRules } from "./buildRules";
import { buildResolvers } from "./buildResolvers";
import path from "node:path";
import type webpack from "webpack";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const isDev = Boolean(options.mode === "development");
  return {
    mode: options.mode,
    entry: options.paths.entry,
    output: {
      filename: "[name].[contenthash:4].js", // Новая ерсия будет кешироватся и Вебпак будет выдавать новое уникальное название
      path: options.paths.build,
      chunkFilename: "[name].bundle.js",
      clean: true, //Удаляем все предыдущие версии файла от Вебпак
    },
    plugins: buildPlugins(options, isDev),
    module: {
      rules: buildRules(isDev),
    },
    resolve: buildResolvers(options),
    devtool: options.mode === "development" ? "inline-source-map" : undefined,
    devServer:
      options.mode === "development" ? buildDevServer(options) : undefined,
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  };
}
