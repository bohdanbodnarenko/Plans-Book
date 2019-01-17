import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = props => {
  return (
    <ul className="right">
      <li>
        <NavLink  activeStyle={props.activeStyle} to="/signup">
            Signup
        </NavLink>
      </li>
      <li>
        <NavLink  activeStyle={props.activeStyle} to="/signin">
            Login
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
