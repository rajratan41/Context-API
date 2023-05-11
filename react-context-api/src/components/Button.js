import React, { useContext } from "react";

// importing myContext
import { myContext } from "../context/myContext";

const Button = () => {
  const data = useContext(myContext);
  return <div style={{ backgroundColor: data.color }}>Color Changer</div>;
};

export default Button;
