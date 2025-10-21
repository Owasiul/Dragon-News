import { createBrowserRouter } from "react-router";
import Home from "../Layout/Home";
import Error404 from "../Components/Error/Error404";
import About from "../Layout/About";
import Career from "../Layout/Career";
import HomePage from "../Page/HomePage";
import CaterogyNews from "../Page/CaterogyNews";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    errorElement: <Error404></Error404>,
    children: [
      {
        path: "/:id",
        Component: HomePage,
        loader: () => fetch("/news.json"),
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
]);
