import React, { useState } from "react";
import HeroSection from "./HeroSection";

const Form = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  const myName = (event) => {
    setName(event.target.value);
  };

  const myColor = (event) => {
    setColor(event.target.value);
  };

  return (
    <>
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
      <HeroSection username={name} btncolor={color} />
    </>
  );
};

export default Form;
