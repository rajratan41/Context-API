import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  const myName = () => {
    setName(event.target.value);
  };

  const myColor = () => {
    setColor(event.target.value);
  };

  return (
    <form>
      <input
        type={"text"}
        placeholder="Enter Your Name"
        value={name}
        onChange={myName}
      ></input>
      <input
        type={"text"}
        placeholder="Enter Your Color"
        value={color}
        onChange={myColor}
      ></input>
    </form>
  );
};

export default Form;
