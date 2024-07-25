import WebLayout from "./../layout";
import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./../pages//HomePage/HomePage.jsx";
import { AboutPage } from "./../pages/AboutPage/AboutPage.jsx";
import { SkillsPage } from "../pages/SkillsPage/SkillsPage.jsx";
import { ArchivingPage } from "./../pages/ArchivingPage/ArchivingPage.jsx";
import { ProjectPage } from "./../pages/ProjectPage/ProjectPage.jsx";
import { CareerPage } from "./../pages/CareerPage/CareerPage.jsx";

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
        path: "/jamooooongPage/skills",
        element: <SkillsPage />,
      },
      {
        path: "/jamooooongPage/about",
        element: <AboutPage />,
      },
      {
        path: "/jamooooongPage/archiving",
        element: <ArchivingPage />,
      },
      {
        path: "/jamooooongPage/project",
        element: <ProjectPage />,
      },
      {
        path: "/jamooooongPage/career",
        element: <CareerPage />,
      },
    ],
  },
]);
