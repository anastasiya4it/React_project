import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buidlPlugins";
import { buildRules } from "./buildRules";
import { buildResolvers } from "./buildResolvers";
import path from "path";
import webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    static: {
      directory: options.paths.build,
      // path.resolve(__dirname, "build"),
    },
    port: options.port,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  };
}
