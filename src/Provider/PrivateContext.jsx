import React, { use } from "react";
import AuthContext from "./AuthContext";
import { Navigate, useLocation } from "react-router";
import LoadingPage from "../Page/LoadingPage";

const PrivateContext = ({ children }) => {
  const { user, Loading } = use(AuthContext);
  const Location = useLocation()
//   console.log(Location);

  if (Loading) {
    return <LoadingPage></LoadingPage>;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivateContext;
