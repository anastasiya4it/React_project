import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { RouterConfig } from "shared/config/routerConfig/RouterConfig";

const AppRouter = () => {
	return (
		<div className="app">
			<Suspense fallback={<div>Завантаження...</div>}>
				<Routes>
					{RouterConfig.map((element) => (
						<Route
							key={element.path}
							path={element.path}
							element={element.element}
						/>
					))}
				</Routes>
			</Suspense>
		</div>
	);
};

export default AppRouter;
