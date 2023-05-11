import React from "react";
import UserCard from "./UserCard";

const HeroSection = (props) => {
  return (
    <div>
      <img
        src="https://images.pexels.com/photos/326508/pexels-photo-326508.jpeg?auto=compress&cs=tinysrgb&w=120&h=75&dpr=1"
        alt="Laptop"
      />
      <UserCard username={props.username} btncolor={props.btncolor} />
    </div>
  );
};

export default HeroSection;
