import { createBrowserRouter } from "react-router";
import Home from "../Layout/Home";
import Error404 from "../Components/Error/Error404";
import About from "../Layout/About";
import Career from "../Layout/Career";
import HomePage from "../Page/HomePage";
import CaterogyNews from "../Page/CaterogyNews";
import Login from "../Page/Login";
import Register from "../Page/Register";
import AuthLayout from "../Layout/AuthLayout";
import NewsDetails from "../Page/NewsDetails";
import PrivateContext from "../Provider/PrivateContext";
import LoadingPage from "../Page/LoadingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    errorElement: <Error404></Error404>,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/caterogy/:id",
        Component: CaterogyNews,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "career",
        Component: Career,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivateContext>
        {" "}
        <NewsDetails></NewsDetails>
      </PrivateContext>
    ),
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <LoadingPage></LoadingPage>,
  },
]);
