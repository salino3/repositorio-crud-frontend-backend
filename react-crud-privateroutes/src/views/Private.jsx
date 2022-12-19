import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const Private = () => {

    const { loadStudents, student, userCheck } = useContext(GlobalContext);

    let { name, email, course, rol, major } = student;

    useEffect(() => {
      loadStudents(userCheck);
    }, []);


  return (
    <>
      <h1 className="textWhite">
        <u>Private Route</u>
      </h1>
      <p className="textWhite">
        <b className="textViolet">Student code:</b> {userCheck}
      </p>
      <p className="textWhite">
        <b className="textViolet">Name:</b> {name}
      </p>
      <p className="textWhite">
        <b className="textViolet">Email:</b> {email}
      </p>
      <p className="textWhite">
        <b className="textViolet">Course:</b> {course}
      </p>
      <p className="textWhite">
        <b className="textViolet">Rol:</b> {rol}
      </p>
      <p className="textWhite">
        <b className="textViolet">Major:</b> {major ? "Yes" : "No"}
      </p>
      <h2 className="textWhite">~ ~ º ~ ~ º ~ ~ º ~ ~</h2>
    </>
  );
}
