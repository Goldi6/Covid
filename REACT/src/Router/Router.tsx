import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Root from "../pages/Root/Root";
import Main from "../pages/MainPage/Main";
import { Navigate } from "react-router-dom";
import { sectionsType } from "../types/typesToApi";
import { getSectionsAPI } from "../serverFuncs/getAPI";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="portal/dashboard/corona"></Navigate>,
    errorElement: <ErrorPage />,
  },
  {
    path: "portal/",
    element: <Root />,
    loader: async (): Promise<sectionsType> => {
      const sections: sectionsType = await getSectionsAPI();


      return sections;
    },
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard/",
        children: [
          {
            path: "corona/",
            element: <Main />,
          },
        ],
      },
    ],
  },
]);

export default router;
