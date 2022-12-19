import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { REGISTER } from "../config-paths/Paths";
import { GlobalContext } from "../context/GlobalContext";

export const Login = () => {
  const navigate = useNavigate();

  const { login, students, loginUser, loginAdmin, loginWB } = useContext(GlobalContext);

  function handleSubmit(event) {
    event.preventDefault();

    let InfoInput = event.target.email.value;
    let InfoInput2 = event.target.psw.value;
    let checkUserEmail = "error email";
    let checkUserPsw = "error psw";

// checking email
    students.forEach((object) => {
      if (object.email === InfoInput) {
        // 
        checkUserEmail = object;
      }
    });
// checking password
    students.forEach((object) => {
      if (object.password === InfoInput2) {
        //
        checkUserPsw = object;
      }
    });
//
    if (checkUserEmail === checkUserPsw && checkUserPsw.email !== undefined) {

    if(checkUserEmail.rol === "web master"){
        loginWB();
    };
    if (checkUserEmail.rol === "admin") {
    loginAdmin();
    };

      login();
      alert("Logged!");

      loginUser(checkUserPsw.id);
      navigate(`/private/${checkUserPsw.id}`);
    } else {
      alert("Sorry the password it's incorrect");
    }
  };

  return (
    <>
      <h1 className="textWhite">
        <u>Login</u>
      </h1>

      <h2 className="textViolet">Enter your email and password for login</h2>
      <form className="formLogin" onSubmit={handleSubmit}>
        <input
          type={"email"}
          name="email"
          autoComplete="username"
          placeholder="Enter your email"
          required
        />{" "}
        <input
          type={"password"}
          name="psw"
          placeholder="Enter your password"
          autoComplete="current-password"
          required
        />{" "}
        &nbsp;
        <button className="LinkStart btn-blue" type="submit">
          Login
        </button>
      </form>
      <Link to={REGISTER}>Go to Register</Link>
    </>
  );
}
