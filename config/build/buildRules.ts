import webpack from "webpack";
export function buildRules(): webpack.RuleSetRule[] {
  return [
    {
      test: /\.tsx?$/,
      //Указываем регулярное выражени, которое охватывает все файлы, которые нужно пропускать через use
      use: "ts-loader",
      exclude: /node-modules/,
      //Исключаемые файлы
    },
  ];
}
