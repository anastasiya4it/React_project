import type { Configuration, RuleSetRule } from "webpack";
import path from "node:path";
import type { BuildPaths } from "../build/types/config";
import buildCssLoader from "../build/loaders/buildCssLoader";

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    entry: "",
    build: "",
    html: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push(".ts", ".tsx");

  config.module?.rules?.push(buildCssLoader(true));

  return config;
};
