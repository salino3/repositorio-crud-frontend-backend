import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const EditStudent = () => {

    const {
      userCheck,
      loadStudents,
      updateStudent,
      student,
      setStudent,
    } = useContext(GlobalContext);

 const { name, email, course, password, rol, major } = student;

  useEffect(() => {
    loadStudents(userCheck);
  }, []);

  const handleChange = (event) => {
    setStudent({ ...student, [event.target.name]: event.target.value });
  };

const handleSubmit = (event) => {
  event.preventDefault();

   updateStudent(userCheck, student);
  alert("Modified");
};
 

  return (
    <>
      <h1 className="textWhite">
        <u>Edit info</u>
      </h1>
      <h3 className="textViolet">
        <b>Student code:</b> {userCheck}
      </h3>
      <div className="divEditStudent">
        <div className="textViolet">
          <p className="pcss1">
            <b>Name:</b> {name}
          </p>
          <p>
            <b>Email:</b> {email}
          </p>

          <p className="pcss2">
            <b>Password:</b> {password}
          </p>
          <p>
            <b>Major: </b> {major ? "Yes" : "No"}
          </p>
          <br />
          <p>
            <b>Course:</b> {course}
          </p>
          <p>
            <b>Rol:</b> {rol}
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            {" "}
            <br />
            <input
              required
              type={"text"}
              name="name"
              placeholder="Do you have a new Name?"
              onChange={handleChange}
              value={name || ""}
            />{" "}
            <br /> <br />
            <input
              required
              type={"email"}
              name="email"
              autoComplete={"username"}
              placeholder="Do you have a new email?"
              onChange={handleChange}
              value={email || ""}
            />{" "}
            <br /> <br />
            <input
              required
              type={"text"}
              name="password"
              autoComplete={"current-password"}
              placeholder="Do you want a new password?"
              onChange={handleChange}
              value={password || ""}
            />
            <br />
            <p>
              <b className="textViolet">Are you major?</b>
            </p>{" "}
            <select
              name="major"
              value={major || ""}
              onChange={handleChange}
              className="textBlue"
              required
            >
              <option className="textBlue" value="">
                {major ? "Yes" : "No"}
              </option>
              <option value={true}>{"Yes"}</option>
              <option value={false}>{"No"}</option>
            </select>
            <br /> <br />
            <select
              name="course"
              value={course || ""}
              onChange={handleChange}
              required
              className="textBlue"
            >
              <option value="">{course} </option>
              <option value="Math">Math</option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="Philosophy">Philosophy</option>
              <option value="Art">Art</option>
            </select>
            <br /> <br />
            <select
              className="textBlue"
              name="rol"
              value={rol || ""}
              onChange={handleChange}
              required
            >
              <option value="">{rol} </option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="web master">Web Master</option>
            </select>
            <br /> <br />
            <button className="btn_submitEditInfo" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditStudent

