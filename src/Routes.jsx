import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import ContactUsPage from "pages/ContactUsPage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "contactuspage",
      element: <ContactUsPage />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
