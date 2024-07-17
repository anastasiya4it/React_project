import webpack from "webpack";
import path from "path";
import tailwindcss from "tailwindcss";
export function buildRules(): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    //Указываем регулярное выражени, которое охватывает все файлы, которые нужно пропускать через use
    use: "ts-loader",
    exclude: /node-modules/,
    //Исключаемые файлы
  };
  const cssLosder = {
    test: /\.css$/i,
    use: [
      "style-loader",
      "css-loader",
      {
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            plugins: [["postcss-preset-env", "tailwindcss"]],
          },
        },
      },
    ],
  };
  return [typescriptLoader, cssLosder];
}
