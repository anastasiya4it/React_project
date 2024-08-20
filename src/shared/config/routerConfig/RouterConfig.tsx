import { AboutPage } from "pages/AboutPage";
import { ErrorPage } from "pages/ErrorPage";
import { MainPage } from "pages/MainPage";
import { PathRouteProps, type RouteProps } from "react-router-dom";

export enum Routes {
	main = "main",
	about = "about",
	error = "error",
}

export const RouterPath: Record<Routes, string> = {
	[Routes.main]: "/",
	[Routes.about]: "/about",
	[Routes.error]: "/:pathMatch(.*)/",
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
