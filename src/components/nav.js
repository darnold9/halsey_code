import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => (
  <ul>
    <li>
      <NavLink activeStyle={{ fontWeight: 700 }} to="/">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink activeStyle={{ fontWeight: 700 }} to="/products">
        Products
      </NavLink>
    </li>
    <li>
      <NavLink activeStyle={{ fontWeight: 700 }} to="/contact">
        Contact
      </NavLink>
    </li>
  </ul>
);

export default Nav;
