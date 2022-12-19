import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageNotFound } from '../components/PageNotFound';
import { LOGIN, PRIVATE, ALL, REGISTER, PRIVATE_ALLS, EDIT, DELETE } from "../config-paths/Paths";
import { GlobalContext } from '../context/GlobalContext';
import {
  Home,
  Login,
  AllsStudents,
  Register,
  Private,
  WebMasterPage,
  AdminPage
} from "../views";
import { DeleteAccount } from '../views/DeleteAccount';
import EditStudent from '../views/EditStudent';
import PrivateRoute from './router-path/PrivateRoute';
import PrivateRouteAdmin from './router-path/PrivateRouteAdmin';
import PrivateRouteWebMaster from './router-path/PrivateRouteWebMaster';
import PublicRoute from './router-path/PublicRoute';

const AppRouter = () => {



  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route index element={<Home />} />
          <Route path={LOGIN} element={<Login />} />
          <Route path={`${ALL}/:id`} element={<AllsStudents />} />
          <Route path={REGISTER} element={<Register />} />
          <Route path={"/*"} element={<PageNotFound />} />
        </Route>
        {/*  */}
        <Route path={PRIVATE} element={<PrivateRoute />}>
          <Route path={`${PRIVATE}/:id`} element={<Private />} />
          <Route path={`${EDIT}/:id`} element={<EditStudent />} />
          <Route path={`${PRIVATE_ALLS}/:id/:id`} element={<AllsStudents />} />
          <Route path={`${DELETE}/:id`} element={<DeleteAccount />} />
          <Route path={"/private/*"} element={<PageNotFound />} />
           {/*  */}
          <Route path={"/private/Web_master"} element={<PrivateRouteWebMaster />}>
            <Route path={"/private/Web_master/:id"} element={<WebMasterPage />}/>
          </Route>
          {/*  */}
          <Route path={"/private/Administrator"} element={<PrivateRouteAdmin />}>
            <Route path={"/private/Administrator/:id"} element={<AdminPage />}/>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default AppRouter