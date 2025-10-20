import { createBrowserRouter } from "react-router";
import Home from "../Layout/Home";
import Error404 from "../Components/Header/Error/Error404";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    errorElement: <Error404></Error404>,
    children: [
     
    ]
  },
]);