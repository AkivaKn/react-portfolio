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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects/:projectId",
        element: <ProjectDetails/>
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);
