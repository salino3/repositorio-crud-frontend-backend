import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

export const AllsStudents = () => {

  const {students, userCheck } = useContext(GlobalContext);

  const {id} = useParams();
 
  let myId  = Number(id);

  return (
    <>
      <h1 className="textWhite">
        <u>Alls Students</u>
        <p className="textExtra">
          {myId ? `student nº ${id} in red ` : ""} &nbsp;{" "}
          {userCheck === id ? " << you" : ""}{" "}
        </p>
      </h1>
      <table className="tablecss">
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Major</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item) => (
            <tr
              key={item.id}
              className={item.id === myId ? "thisIs " : " gridTr"}
            >
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.course}</td>
              <td>{item.major ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

