import { Link } from "react-router-dom";
import { LOGIN, REGISTER } from "../config-paths/Paths";

export const Home = () => {

  return (
    <>
      <h1 className="textWhite">
        <u>Home ~ Public route</u>
      </h1>

      <h2 className="textViolet">Welcome to the School page</h2>
      <p className="textViolet">
        Click here for login:{" "}
        <Link className="textBlue" to={LOGIN}>
          Go to login
        </Link>
      </p>
      <p className="textViolet">
        Click here for register:{" "}
        <Link className="textBlue" to={REGISTER}>
          Go to register
        </Link>
      </p>
    </>
  );
}
