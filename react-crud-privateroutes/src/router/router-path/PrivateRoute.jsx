import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { LOGIN } from '../../config-paths/Paths';
import { GlobalContext } from '../../context/GlobalContext';

const PrivateRoute = () => {

    const { isAuthenticated } = useContext(GlobalContext);

    if (!isAuthenticated) {
      return <Navigate to={LOGIN} />;
    };

  return (
    <>
    <Outlet />
    </>
  )
}

export default PrivateRoute