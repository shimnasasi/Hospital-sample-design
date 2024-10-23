import React, { useState } from "react";
import "./Navbar.css";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [view, setView] = useState(false);
  // setView(true)
  return (
    <div className="Navbar">
      <div className="medical">Medical</div>
      <ul className="ul">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/about"}>
          <li>About</li>
        </Link>
        <Link to={"/doctor"}>
          <li>Doctors</li>
        </Link>
        <Link to={"/department"}>
          <li>Department</li>
        </Link>
        <Link to={"/contact"}>
          <li>Contact</li>
        </Link>
      </ul>
      {view ? (
        <ul className="listmobile">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
          <Link to={"/doctor"}>
            <li>Doctors</li>
          </Link>
          <Link to={"/department"}>
            <li>Department</li>
          </Link>
          <Link to={"/contact"}>
            <li>Contact</li>
          </Link>
        </ul>
      ) : null}
      <button className="btn">123456789</button>
      <FiAlignJustify
        className="icon"
        onClick={() => {
          setView(!view);
        }}
      />
    </div>
  );
};

export default Navbar;
