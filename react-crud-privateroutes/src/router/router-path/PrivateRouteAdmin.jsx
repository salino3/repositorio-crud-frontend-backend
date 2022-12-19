import React, { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LOGIN, PRIVATE } from "../../config-paths/Paths";
import { GlobalContext } from "../../context/GlobalContext";

const PrivateRouteAdmin = () => {
  const { isAuthenticated, userCheck, webMaster, Admin } =
    useContext(GlobalContext);

  if (!Admin && !webMaster) {
    return <Navigate to={`${PRIVATE}/${userCheck}`} />;
  };

  if (!isAuthenticated) {
    return <Navigate to={LOGIN} />;
  };

  return (
    <>
      <Outlet />
    </>
  );
};

export default PrivateRouteAdmin;

