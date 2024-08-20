import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import React, { Suspense } from "react";

import AppRouter from "./provider/RouterProvader/ui/AppRouter";
import { ThemeProvider } from "./provider/ThemeProvider/ui/ThemeProvider";
import { classNames } from "shared/lib/className/className";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { useTranslation } from "react-i18next";

function App() {
	// const { t, i18n } = useTranslation();
	// const toggle = () => {
	//   i18n.changeLanguage(i18n.language === "en" ? "ua" : "en");
	//   console.log(i18n.changeLanguage());
	// };

	return (
		<Suspense fallback="loading">
			<ThemeProvider>
				<Navbar />
				<div className="content">
					<Sidebar />
					<div className="inner">
						<AppRouter />
					</div>
				</div>
			</ThemeProvider>
		</Suspense>
	);
}

export default App;
