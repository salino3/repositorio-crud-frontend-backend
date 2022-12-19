import React, {  useState } from 'react';
import Card from './Card';

const Input = () => {

  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    event.preventDefault();

    setSearchValue(event.target.value);
  };

  return (
    <>
      <div className="divInputNavBar">
        <input
          onChange={handleChange}
          value={searchValue}
          name="searching"
          type={"text"}
          placeholder={"Email or Code"}
        />
      </div>
      <div className='divCard'>
        <Card
          searchValue={searchValue.trim()}
          setSearchValue={setSearchValue}
        />
      </div>
    </>
  );
}

export default Input