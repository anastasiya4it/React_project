import type { BuildOptions } from "./types/config";
import type { Configuration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): Configuration {
  return {
    port: options.port,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  };
}
