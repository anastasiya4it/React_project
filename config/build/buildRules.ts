import type webpack from "webpack";
import path from "node:path";
// import tailwindcss from "tailwindcss";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import buildCssLoader from "./loaders/buildCssLoader";

// Если не используем тайпскрипт - нужен babel-loader
export function buildRules(isDev: boolean): webpack.RuleSetRule[] {
  // const isDev = mode === "development";
  const babelLoader = {
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: [
          [
            "i18next-extract",
            {
              nsSeparator: "~",
              locales: ["en", "ua", "ru"],
              keyAsDefaultValue: true,
            },
          ],

          // […] your other plugins […]
        ],
      },
    },
  };
  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ["@svgr/webpack"],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    //Указываем регулярное выражени, которое охватывает все файлы, которые нужно пропускать через use
    use: "ts-loader",
    exclude: /node-modules/,
    //Исключаемые файлы
  };
  const cssLoader = buildCssLoader(isDev);
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    loader: "file-loader",
    options: {
      name: "[name]--[hash:base64:5].[ext]",
      outputPath: "images",
      publicPath: "images",
      emitFile: true,
      esModule: false,
    },
  };

  return [babelLoader, fileLoader, svgLoader, typescriptLoader, cssLoader];
}
