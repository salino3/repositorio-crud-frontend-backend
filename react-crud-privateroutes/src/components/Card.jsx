import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ALL, PRIVATE_ALLS } from "../config-paths/Paths";
import { GlobalContext } from "../context/GlobalContext";

const Card = ({ searchValue, setSearchValue }) => {
  const { students, userCheck } = useContext(GlobalContext);

  const navigate = useNavigate();

  const onSearch = (event) => {
    let Searching = event;
    let checkUserData = {};

    students.forEach((object) => {
      if (object.email === Searching || object.id.toString() === Searching) {
        checkUserData = object;
      }
    });

    if (
      (checkUserData.email === Searching ||
        checkUserData.id.toString() === Searching) &&
      Searching !== ""
    ) {
      if (userCheck) {
        navigate(`${PRIVATE_ALLS}/${userCheck}/${checkUserData.id}`);
      } else {
        navigate(`${ALL}/${checkUserData.id}`);
      }
    } else {
      alert("Sorry, we don't have this email in the database");
    }
    setSearchValue("");
  };

  return (
    <>
      {!students
        ? "Loading"
        : students
            .filter((item) => {
              let searchTerm = "";
              let x = searchValue;
              searchTerm = x?.toLowerCase();

              const theemail = item.email.toLowerCase();
              const theid = item.id.toString();

              return (
                searchTerm &&
                (theid.includes(searchTerm) || theemail.includes(searchTerm)) &&
                (theemail || theid)
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                key={item.id}
                onClick={() => onSearch(item.email)}
                className="dropdown_row">
                {item.id} &nbsp; {item.email}
              </div>
            ))}
    </>
  );
};

export default Card;
