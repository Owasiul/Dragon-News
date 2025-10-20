import { createBrowserRouter } from "react-router";
import Home from "../Layout/Home";
import Error404 from "../Components/Error/Error404";
import About from "../Layout/About";
import Career from "../Layout/Career";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    errorElement: <Error404></Error404>,
    children: [
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
