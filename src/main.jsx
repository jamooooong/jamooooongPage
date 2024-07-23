import React from "react";
import ReactDOM from "react-dom/client";
import WebLayout from "./layout";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages//HomePage/HomePage.jsx";
import { AboutPage } from "./pages/AboutPage/AboutPage.jsx";

const router = createBrowserRouter([
  {
    path: "/jamooooongPage/",
    element: <WebLayout />,
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
