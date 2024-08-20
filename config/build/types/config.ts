export type BuildMode = "production" | "development";

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}
export type BuildEnv = {
  mode: BuildMode;
  port: number;
};
export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  port: number;
}
