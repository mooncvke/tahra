"use client";
import { useState } from "react";
import NavBar from "./navbar";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <NavBar toggle={toggle} isOpen={isOpen} />
    </>
  );
};

export default Nav;
