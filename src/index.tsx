import { someFn } from "./test";
import "../style.css";
import { Caunter } from "./components/Caunter";
import React from "react";
import {createRoot} from "react-dom/client";

someFn(144);
const port = 5000;



const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Caunter />);