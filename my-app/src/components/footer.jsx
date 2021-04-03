import React from "react";
import logo from "../assets/General/logo.png";

export default function footer() {
  return (
    <section className="footer">
      <img src={logo} className="logo" />
      <h2> Copyright © 2021 Travel Easy. All rights reserved </h2>
      <ul className="navList">
        <li className="active">Home</li>
        <li>About</li>
        <li>Locations</li>
        <li>Gallery</li>
      </ul>
    </section>
  );
}
