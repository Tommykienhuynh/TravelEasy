import React, { useState } from "react";
import logo from "../../assets/General/logo.png";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Navbar({ nav }) {
  const history = useHistory();
  let [navActive, setNavActive] = useState("home");
  return (
    <nav className={nav ? `active` : ``}>
      <div className="logoAndTitle">
        {nav ? (
          <img src={logo} className="logo" />
        ) : (
          <img src={logo} className="visNone" />
        )}

        {nav ? (
          <h2 className="headers"> Travel Easy</h2>
        ) : (
          <h2 className="headers visNone"> Travel Easy</h2>
        )}
      </div>

      <ul className="navList">
        <NavLink className="nLi" exact to="/" activeCLassName="active">
          Home
        </NavLink>
        <NavLink className="nLi" exact to="/about" activeCLassName="active">
          About
        </NavLink>
        <NavLink className="nLi" exact to="/location" activeCLassName="active">
          Locations
        </NavLink>
        <NavLink className="nLi" to="/gallery" activeCLassName="active">
          Gallery
        </NavLink>
      </ul>
    </nav>
  );
}
