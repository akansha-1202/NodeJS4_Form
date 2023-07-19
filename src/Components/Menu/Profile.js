import React from "react";
import { NavLink } from "react-router-dom";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import LoginIcon from "@mui/icons-material/Login";
import AddIcon from "@mui/icons-material/Add";

export default function Profile() {
  return (
    <>
      <button className="dropbtn">
        <PersonAddAltOutlinedIcon />
        <p>My Profile</p>
      </button>
      <div className="dropdown-content">
        <NavLink to="/login">
          <div>
            <LoginIcon />
          </div>
          <div>LogIn</div>
        </NavLink>
        <NavLink to="/register">
          <div>
            <AddIcon />
          </div>
          <div>Register</div>
        </NavLink>

      </div>
    </>
  );
}
