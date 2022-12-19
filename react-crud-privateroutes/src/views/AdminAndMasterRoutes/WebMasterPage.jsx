import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';

export const WebMasterPage = ({x, myrol}) => {
  const {
    deleteStudentWebMaster,
    student,
    userCheck,
    updateStudent,
    students
  } = useContext(GlobalContext);

   
    


  const [usingValue, setUsingValue] = useState("");

  function handleClick(event) {
    //
    setUsingValue(event);
  }

  useEffect(() => {
    let x = parseInt(userCheck);
    if (usingValue !== x && usingValue !== "") {
      deleteStudentWebMaster(usingValue);
    } else if (usingValue === "") {
  // So when we enter in this page, does not have any action
    } else {
      alert("In this section you can not eliminate your-self");
    }
  }, [usingValue]);

  //
  function handleClickToggle(event) {
    let one = students.find((item) => item.id === event);
    one.major = !one.major;
    updateStudent(one.id, one);
  }

  return (
    <>
      <h1 className="textViolet">
        <u>
          Well come back Web Master {student.name}!
        </u>
      </h1>
      <p className="textViolet">Private route</p>
      <br />
      <Link to={`/private/Administrator/${userCheck}`}>
        <button className="btn_GoToAmdminWM">Go to Admin Page</button>
      </Link>
      <table className="tablecssWM">
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Major</th>
            <th>Rol</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item) => (
            <tr key={item.id} className="gridTrWM">
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.course}</td>
              <td>{item.major ? "Yes" : "No"}</td>
              <td>{item.rol}</td>
              <td>{item.password}</td>
              <td>
                <button
                  className="btnDeleteWM"
                  type="submit"
                  onClick={() => handleClick(item.id)}
                >
                  Delete user
                </button>{" "}
                <button
                  className="btnUpdateWM"
                  type="submit"
                  onClick={() => handleClickToggle(item.id)}
                >
                  Change major info
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

