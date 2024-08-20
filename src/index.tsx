// import "../style.css";
// import React from "react";
import { createRoot } from "react-dom/client";
// import {createBrowserRouter, RouterProvider, Router,Link} from "react-router-dom"
import { BrowserRouter, Route, Link, useParams } from "react-router-dom";
import App from "./app/App";
import "./shared/config/i18n/i18n";
import { Console } from "console";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
} else {
  // biome-ignore lint/suspicious/noConsoleLog: <explanation>
  console.log("stop");
}
