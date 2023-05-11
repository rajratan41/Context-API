import React, { useContext } from "react";

// importing myContext
import { myContext } from "../context/myContext";

const UserDetails = () => {
  const data = useContext(myContext);
  return <div>My Name is : {data.name}</div>;
};

export default UserDetails;
