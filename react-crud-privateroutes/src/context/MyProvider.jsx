import React, {  useCallback, useEffect, useState } from 'react';
import { GlobalContext } from './GlobalContext';
import axios from "axios";

const MyProvider = ({children}) => {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({});

  //* Personal ID during Login
  let userID = "USERID";

  const [userCheck, setUserCheck] = useState(
    window.localStorage.getItem(userID)
  );

  const loginUser = useCallback(function (info) {
    window.localStorage.setItem(userID, JSON.stringify(info));
    setUserCheck(info);
  }, []);

  const logoutUser = useCallback(function () {
    window.localStorage.removeItem(userID, JSON.stringify(""));
    setUserCheck("");
  }, []);

  //* Rol Web Master
  let rolWebMaster = "web_master";

  const [webMaster, setWebMaster] = useState(
    window.localStorage.getItem(rolWebMaster) ?? false
  );

  const loginWB = useCallback(function () {
    window.localStorage.setItem(rolWebMaster, true);
    setWebMaster(true);
  }, []);

  const logoutWB = useCallback(function () {
    window.localStorage.removeItem(rolWebMaster, false);
    setWebMaster(false);
  }, []);

  //* Rol Admin
  let rolAdmin = "admin";

  const [Admin, setAdmin] = useState(
    window.localStorage.getItem(rolAdmin) ?? false
  );

  const loginAdmin = useCallback(function () {
    window.localStorage.setItem(rolAdmin, true);
    setAdmin(true);
  }, []);

  const logoutAdmin = useCallback(function () {
    window.localStorage.removeItem(rolAdmin, false);
    setAdmin(false);
  }, []);

  // 
  //* API call
  const myapi = "http://localhost:8080/students";

  const fetchApi = useCallback(async () => {
    const response = await fetch(myapi);

    const JsonResponse = await response.json();
    setStudents(JsonResponse);
  }, []);

  useEffect(() => {
    fetchApi();
  }, []);

  //* Add a student
  const addStudent = useCallback(async (studentsData) => {
    try {
      await axios.post("http://localhost:8080/students", studentsData);
      fetchApi();
    } catch (error) {
      console.log(error);
      alert("There has been an error!");
    }
  }, []);

  //* View Student info
  const loadStudents = useCallback(async (id) => {
    try {
      //

      const result = await axios.get(`http://localhost:8080/students/${id}`);
      console.log(result);
      setStudent(result.data);
    } catch (error) {
      console.log(error);
      alert("Student with this code is not in the database");
    }
  }, []);

  //* Modify data student
  const updateStudent = useCallback(async (id, student) => {
    try {
      await axios.put(`http://localhost:8080/students/${id}`, student);
      fetchApi();
    } catch (error) {
      alert("There has been an error!");
      console.log(error);
    }
  }, []);

  //* Delete a student
  const deleteStudent = useCallback(async (id) => {
    try {
      await axios.delete(`http://localhost:8080/students/${id}`);
      logoutWB();
      logoutAdmin();
      logout();
      logoutUser();
      fetchApi();
    } catch (error) {
      alert("There has been an error!");
      console.log(error);
    }
  }, []);

  //* Delete a student from Web Master
  const deleteStudentWebMaster = useCallback(async (id) => {
    try {
      await axios.delete(`http://localhost:8080/students/${id}`);
      alert("User deleted!");
      fetchApi();
    } catch (error) {
      alert("There has been an error!");
      console.log(error);
    }
  }, []);

  //

  let user = "USER";

  const [isAuthenticated, setIsAuthenticated] = useState(
    window.localStorage.getItem(user) ?? false
  );

  const login = useCallback(function () {
    window.localStorage.setItem(user, true);
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(function () {
    window.localStorage.removeItem(user, false);
    setIsAuthenticated(false);
  }, []);

  return (
    <>
      <GlobalContext.Provider
        value={{
          students,
          fetchApi,
          addStudent,
          student,
          loadStudents,
          deleteStudent,
          deleteStudentWebMaster,
          updateStudent,
          setStudent,
          //
          userCheck,
          loginUser,
          logoutUser,
          isAuthenticated,
          login,
          logout,
          webMaster,
          loginWB,
          logoutWB,
          Admin,
          loginAdmin,
          logoutAdmin
        }}
      >
        {children}
      </GlobalContext.Provider>
    </>
  );
}

export default MyProvider