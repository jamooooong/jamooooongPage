import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage.jsx";
import { AboutPage } from "./pages/AboutPage.jsx";

const router = createBrowserRouter([
  {
    path: "/jamooooongPage/",
    element: <App />,
    children: [
      {
        path: "/jamooooongPage/",
        element: <HomePage />,
      },
      {
        path: "/jamooooongPage/about",
        element: <AboutPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
