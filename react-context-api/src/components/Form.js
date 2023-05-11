import React, { useState } from "react";

import HeroSection from "./HeroSection";

import { myContext } from "../context/myContext";

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
    <myContext.Provider value={{ name, color }}>
      <>
        <form>
          <input
            type="name"
            placeholder="Enter Your Name"
            value={name}
            onChange={myName}
          ></input>
          <input
            type="name"
            placeholder="Enter Your Color"
            value={color}
            onChange={myColor}
          ></input>
        </form>
        <HeroSection />
      </>
    </myContext.Provider>
  );
};

export default Form;
