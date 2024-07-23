import WebLayout from "./../layout";
import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./../pages//HomePage/HomePage.jsx";
import { AboutPage } from "./../pages/AboutPage/AboutPage.jsx";

export const router = createBrowserRouter([
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
