import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

export const AdminPage = () => {
  const {  student } = useContext(GlobalContext);


  return (
    <>
      <h1 className="textViolet"><u>Well come back Admin {student.name}!</u></h1>
      <p className="textViolet">Private route</p>

      <div>
        <img src='/logo512.png' alt='Logo' />
      </div>
    </>
  );
}
