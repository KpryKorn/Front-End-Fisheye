import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../src/css/index.css";
import Photographer from "./components/Photographer.tsx";

const homePath = "/Front-End-Fisheye"; // This is the base path according to Vite Config ("/")

const router = createBrowserRouter([
  {
    path: `${homePath}/`,
    element: <App />,
  },
  {
    path: `${homePath}/:photographerId`,
    element: <Photographer />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
