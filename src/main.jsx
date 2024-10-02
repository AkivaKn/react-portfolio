import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Route from "./roots/Root";
import Home from "./components/Home";
import "./App.css";
import ProjectDetails from "./components/ProjectDetails";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <App />
  </StrictMode>
);
