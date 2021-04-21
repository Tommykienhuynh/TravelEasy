import React, { useState } from "react";
import logo from "../../assets/General/logo.png";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Navbar({ nav }) {
  const history = useHistory();
  const [dropDown, setDrop] = useState(false);
  const [isLocation, setIsLocation] = useState(true);
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
        <span
              className="nLi"
              exact
        /*       to="/location"
              activeCLassName="active" */
              onClick={() => setDrop(!dropDown)}
            >
              Locations
            </span>
        {dropDown && (
          <div className="navDropDown shadow">
            <NavLink
              className="nLi"
              exact
              to="/location"
              activeCLassName="active"
            >
              Japan
            </NavLink>
            <NavLink
              className="nLi"
              exact
              to="/location/Not"
              activeCLassName="active"
            >
              Locations
            </NavLink>
          </div>
        )}

        <NavLink className="nLi" to="/gallery" activeCLassName="active">
          Gallery
        </NavLink>
      </ul>
    </nav>
  );
}
