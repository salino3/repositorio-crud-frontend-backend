import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const DeleteAccount = () => {
  const { userCheck, student, loadStudents, deleteStudent } = useContext(GlobalContext);

  const { name, email, password, id } = student;

  useEffect(() => {
    loadStudents(userCheck);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let Email = event.target.email.value;
    let Password = event.target.psw.value;

    if (Email === email && Password === password) {
      deleteStudent(id);
      alert("Deleted the account successfully");
    } else {
      alert("The data does not match");
    }
  };

  
  return (
    <>
      <h1 className="textWhite">
        <u>Delete Account</u>
      </h1>
      <h2 className="textViolet">
        {name} Enter your email and password for delete the account
      </h2>
      <form className="deleteForm" onSubmit={handleSubmit}>
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
          autoComplete="current-password"
          placeholder="Enter your password"
          required
        />{" "}
        &nbsp;
        <button className="LinkLogout LinkDelete " type="submit">
          Delete
        </button>
      </form>
    </>
  );
};
