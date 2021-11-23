import React, { useState } from "react";

function State() {
  const [inputValue, setName] = useState({
    fname: "",
    lname: "",
    age: null,
  });

  const { fname, lname, age } = inputValue;

  return (
    <div>
      <form>
        <input
          type="text"
          name="fname"
          vlaue={fname}
          onChange={(e) => setName({ ...inputValue, fname: e.target.value })}
          autoComplete="off"
        />{" "}
        <br /> <br />
        <input
          type="text"
          name="lname"
          vlaue={lname}
          onChange={(e) => setName({ ...inputValue, lname: e.target.value })}
          autoComplete="off"
        />{" "}
        <br />
        <br />
        <input
          type="text"
          vaue={age}
          onChange={(e) => setName({ ...inputValue, age: e.target.value })}
        />
      </form>

      <p>First Name: {fname} </p>
      <p>Last Name: {lname} </p>
      <p>age: {age} </p>
      <hr />
    </div>
  );
}

export default State;
