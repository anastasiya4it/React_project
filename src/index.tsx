import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Link, useParams } from "react-router-dom";
import App from "./app/App";
import "./shared/config/i18n/i18n";
import { ErrorBoundary } from "app/provider/ErrorBoundary";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  );
} else {
  // biome-ignore lint/suspicious/noConsoleLog: <explanation>
  console.log("stop");
}
