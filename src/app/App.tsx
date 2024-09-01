import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import React, { Suspense } from "react";
import AppRouter from "./provider/RouterProvader/ui/AppRouter";
import { ThemeProvider } from "./provider/ThemeProvider/ui/ThemeProvider";
import { classNames } from "shared/lib/className/className";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Loader } from "shared/ui/Loader";

function App() {
  return (
    <Suspense fallback={<Loader />}>
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
