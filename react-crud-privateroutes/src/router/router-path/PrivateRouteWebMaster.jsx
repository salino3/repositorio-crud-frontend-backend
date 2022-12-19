import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { LOGIN, PRIVATE } from '../../config-paths/Paths';
import { GlobalContext } from '../../context/GlobalContext';

const PrivateRouteWebMaster = () => {
  const { isAuthenticated,  userCheck, webMaster } =
    useContext(GlobalContext);


    if (!webMaster){
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
}

export default PrivateRouteWebMaster