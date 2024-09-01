import { lazy } from "react";

const MainPageLazy = lazy(() =>
  import("./MainPage").then((module) => ({
    default: module.MainPage,
  }))
);

export { MainPageLazy };
