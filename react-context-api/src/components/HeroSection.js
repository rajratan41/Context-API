import React from "react";
import UserCard from "./UserCard";

const HeroSection = () => {
  return (
    <>
      <div>
        <img
          alt="laptop"
          src="https://images.pexels.com/photos/326508/pexels-photo-326508.jpeg?auto=compress&cs=tinysrgb&w=120&h=75&dpr=1"
        />
      </div>
      <UserCard />
    </>
  );
};

export default HeroSection;
