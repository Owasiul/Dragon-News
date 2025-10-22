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
]);
