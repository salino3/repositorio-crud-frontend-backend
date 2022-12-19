import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {  PRIVATE } from '../../config-paths/Paths';
import { GlobalContext } from '../../context/GlobalContext';

const PublicRoute = () => {

     const { isAuthenticated } = useContext(GlobalContext);

     if (isAuthenticated) {
       return <Navigate to={PRIVATE} />;
     };


  return (
    <div>
     <Outlet />
    </div>
  )
}

export default PublicRoute
