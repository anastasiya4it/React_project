// const path = require("path");
// const HTMLWebpackPlugin = require("html-webpack-plugin");
// const webpack = require("webpack");

import path from "path";
import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
// import { buildPlugins } from "./config/build/buidlPlugins";
// import { buildRules } from "./config/build/buildRules";
// import { buildResolvers } from "./config/build/buildResolvers";

// module.exports = { // убираем, потому что установлен флаг "esModuleInterop":true,
const сonfig: webpack.Configuration = {
  //development - этап разработаки не ссильно сжат код;
  //production - все лишнее удаляется полностью минимизируетя код;
  mode: "development",
  //   entry: "./src/index.js", без path
  ////////////////////////////
  //   entry: {
  //     MainFaleWhithManiFales: path.resolve(__dirname, "src", "index.js"), //Если много файлов с кодом нужно собрать в один
  //   },
  //////////////////////
  entry: path.resolve(__dirname, "src", "index.ts"), //__dirname - текущая папка, а затеп через перечеь пть к стартовой точке

  output: {
    // filename: "bundle.js",   Строгое название
    // filename: "[name].js", // Будет main дефолтное название готового файла
    filename: "[name].[contenthash].js", // Новая ерсия будет кешироватся и Вебпак будет выдавать новое уникальное название
    path: path.resolve(__dirname, "build"), //Можно записать просто __dirname, "/build"
    clean: true, //Удаляем все предыдущие версии файла от Вебпак
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  module: {
    rules: [
      // buildRules(),
      {
        test: /\.tsx?$/,
        //Указываем регулярное выражени, которое охватывает все файлы, которые нужно пропускать через use
        use: "ts-loader",
        exclude: /node-modules/,
        //Исключаемые файлы
      },
    ],

    // нужно для того, чтобы обрабатывать файлы, которые выходят за рамки JS все PNG, JPG и тд
    // ts тоже выходит за рамки  JS, поэтому тут описано правила обработки
  },
  resolve:
    // buildResolvers(),
    {
      extensions: [".tsx", ".ts", ".js"], //при импорте не указываем эти расширение, файлы с исходным кодом
    },
};
export default сonfig;
