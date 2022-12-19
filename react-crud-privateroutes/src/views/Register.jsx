import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN } from '../config-paths/Paths';
import { GlobalContext } from '../context/GlobalContext';

export const Register = () => {

      const { addStudent } = useContext(GlobalContext);

      const navigate = useNavigate();

      const [student, setStudent] = useState({
        name: "",
        email: "",
        password: "",
        course: "",
        major: "",
        rol: ""
      });

      const { name, email, password, course, major, rol } = student;

      const handleChange = (event) => {
        
        setStudent({ ...student, [event.target.name]: event.target.value });
      };

       const handleSubmit = (event) => {
         event.preventDefault();

         if (
           email.length &&
           password.length >= 5 &&
           course !== "" &&
           rol !== ""
         ) {
           alert("Validation form OK");
           addStudent(student);
           navigate(LOGIN);
         } else {
           alert("Repeat the form");
         }
       };

  return (
    <>
      <h1 className="textWhite">
        <u>Register</u>
      </h1>
      <form className="formRegister" onSubmit={handleSubmit}>
        <input
          type={"text"}
          name="name"
          placeholder="Enter your name.."
          onChange={handleChange}
          value={name}
          required
        />{" "}
        <br />
        <br />
        <input
          type={"email"}
          name="email"
          placeholder="Enter your email.."
          autoComplete="username"
          onChange={handleChange}
          value={email}
          required
        />
        <br /> <br />
        <small className="textViolet">
          * minimum 5 characters for the password *
        </small>
        <br />
        <input
          type={"password"}
          name="password"
          autoComplete="current-password"
          placeholder="Create your password.."
          onChange={handleChange}
          value={password}
          required
        />{" "}
        <br />
        <br />
        <b className="textViolet">Are you major?</b> <br />
        <select
          className="textViolet"
          name="major"
          value={major}
          onChange={handleChange}
          required
        >
          <option value={null}>- -</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <br /> <br />
        <select
          className="textViolet"
          name="course"
          value={course}
          onChange={handleChange}
          required
        >
          <option value="">Select your course.. </option>
          <option value="Math">Math</option>
          <option value="Software Engineer">Software Engineer</option>
          <option value="Philosophy">Philosophy</option>
          <option value="Art">Art</option>
        </select>
        <br />
        <br />
        <select
          className="textViolet"
          name="rol"
          value={rol}
          onChange={handleChange}
          required
        >
          <option value="">What is your rol.. </option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="web master">Web Master</option>
        </select>
        <br />
        <br />
        <div className="divBtnLink">
          <div>
            <button className="btn_submitRegister" type="submit">
              Submit
            </button>
          </div>
          <Link to={LOGIN}>Go to login</Link>
        </div>
      </form>
    </>
  );
}
