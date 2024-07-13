import { ResolveOptions } from "webpack";

export function buildResolvers(): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"], //при импорте не указываем эти расширение, файлы с исходным кодом
  };
}
