import { useContext, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { ALL, DELETE, EDIT, LOGIN, PRIVATE, PRIVATE_ALLS, REGISTER } from "../config-paths/Paths";
import { GlobalContext } from "../context/GlobalContext";
import Input from "./Input";

const Navbar = () => {
  const {
    loadStudents,
    student,
    userCheck,
    isAuthenticated,
    logout,
    logoutUser,
    logoutWB,
    logoutAdmin,
    webMaster,
    Admin
  } = useContext(GlobalContext);


   useEffect(() => {
     if (isAuthenticated) {
       loadStudents(userCheck);
       
     }
   }, [userCheck, isAuthenticated, loadStudents]);

  let { rol } = student;
  //
  let route = "";

  
  switch (rol) {
    case "user":
      route = "";
      break;
    case "admin":
      route = "Administrator";
      break;
    case "web master":
      route = "Web_Master";
      break;

    default:
      break;
  }

  const handleClick = () => {
    logoutWB();
    logoutAdmin();
    logout();
    logoutUser();
    <Navigate to={LOGIN} />;
  };

  return (
    <>
      <nav className="Nav">
        <div className="divButtonsNav">
          <div>
            {" "}
            {userCheck ? (
              <div className="divTextLogged textViolet">
                <h2 >You are logged!</h2>
                <Link to={`${PRIVATE}/${userCheck}`}>Private Info </Link>
              </div>
            ) : (
              <Link to={`${LOGIN}`}>
                <button className="btn-start"> Start </button>
              </Link>
            )}
          </div>
          <div className="divButtonsNav2">
            {" "}
            {isAuthenticated ? (
              <Link onClick={() => handleClick()} to="/">
                <button className="btn-logout"> Logout </button>{" "}
              </Link>
            ) : (
              ""
            )}
          </div>
          <div className="divButtonsNav2">
            {(Admin || webMaster) ? (
              <Link to={`${PRIVATE}/${route}/${userCheck}`}>
                <button className="btn_extraRoute">{route} Page</button>
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
        <div>
          <ul className="ulGrid">
            <li>
              {userCheck ? (
                <Link to={`${PRIVATE_ALLS}/${userCheck}/${null}}`}>
                  All Students
                </Link>
              ) : (
                <Link to={`${ALL}/${null}`}>All Students</Link>
              )}{" "}
            </li>
            <li>
              {userCheck ? (
                <Link to={`${DELETE}/${userCheck}`}>
                  Delete your account
                </Link>
              ) : (
                <Link to={REGISTER}>Register</Link>
              )}
            </li>
            <li>
              {userCheck ? (
                <Link to={`${EDIT}/${userCheck}`}>Edit info</Link>
              ) : (
                <Link to={`${LOGIN}`}>Login</Link>
              )}
            </li>
            <li>
              <Input />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;