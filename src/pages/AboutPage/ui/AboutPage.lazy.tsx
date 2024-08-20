import { lazy } from "react";

const AboutPageLazy = lazy(() =>
	import("./AboutPage").then((module) => ({
		default: module.AboutPage,
	})),
);

export { AboutPageLazy };
