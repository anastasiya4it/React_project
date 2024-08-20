import { ResolveOptions } from "webpack";
import path from "path";
import { BuildOptions } from "./types/config";

export function buildResolvers({ paths }: BuildOptions): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"], //при импорте не указываем эти расширение, файлы с исходным кодом
    preferAbsolute: true,
    modules: [paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: {},
  };
}
