import { AboutPage } from "pages/AboutPage";
import { ErrorPage } from "pages/ErrorPage";
import { MainPage } from "pages/MainPage";
import { PathRouteProps, type RouteProps } from "react-router-dom";

export enum Routes {
  Main = "main",
  About = "about",
  Error = "error",
}

export const RouterPath: Record<Routes, string> = {
  [Routes.Main]: "/",
  [Routes.About]: "/about",
  [Routes.Error]: "/*",
};
export const RouterConfig: ReadonlyArray<RouteProps> = [
  {
    path: RouterPath.main,
    element: <MainPage />,
  },
  {
    path: RouterPath.about,
    element: <AboutPage />,
  },
  {
    path: RouterPath.error,
    element: <ErrorPage />,
  },
];
