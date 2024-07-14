import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buidlPlugins";
import { buildRules } from "./buildRules";
import { buildResolvers } from "./buildResolvers";
import path from "path";
import webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
  };
}
