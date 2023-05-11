import React from "react";
import UserDetails from "./UserDetails";
import Button from "./Button";

const UserCard = (props) => {
  return (
    <>
      <UserDetails username={props.username} />
      <Button btncolor={props.btncolor} />
    </>
  );
};

export default UserCard;
