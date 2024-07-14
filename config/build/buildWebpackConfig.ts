import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buidlPlugins";
import { buildRules } from "./buildRules";
import { buildResolvers } from "./buildResolvers";
import path from "path";
import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  return {
    mode: options.mode,
    entry: options.paths.entry,
    output: {
      filename: "[name].[contenthash].js", // Новая ерсия будет кешироватся и Вебпак будет выдавать новое уникальное название
      path: options.paths.build,
      clean: true, //Удаляем все предыдущие версии файла от Вебпак
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildRules(),
    },
    resolve: buildResolvers(),
    devtool: options.mode == "development" ? "inline-source-map" : undefined,
    devServer:
      options.mode == "development" ? buildDevServer(options) : undefined,
  };
}
