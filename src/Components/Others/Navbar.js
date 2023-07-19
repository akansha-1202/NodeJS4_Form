import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import Profile from "../Menu/Profile";

export default function Navbar() {
  return (
    <div className="nav">
      <NavLink to="/" className="home">
        <HomeIcon />
      </NavLink>

      <ul type="none" className="profile">
        <li className="dropdown">
          <Profile />
        </li>
      </ul>
    </div>
  );
}
