import Image from "next/image";
import React from "react";
import logo from "../../assets/logo.svg";
import '../Navbar/Navbar.css'
import { BiSearch } from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";


const Navbar = () => {
  return (
    <>
      <nav>
        <div className="left">
          <Image src={logo} alt="BookMyShow Logo" />
          <div className="searchPara">
            <BiSearch style={{margin: "5px"}} />
            <input placeholder="Search for Movies, Events, Plays, Sports and Activities"/>
          </div>
        </div>

        <div className="right">
          <p>Haryana <AiFillCaretDown/> </p>
          <button>Sign in</button>
          <FiMenu/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
