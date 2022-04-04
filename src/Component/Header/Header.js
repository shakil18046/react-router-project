import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="nav">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link-active" : "nav-link"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/Reviews"
        className={({ isActive }) =>
          isActive ? "nav-link-active" : "nav-link"
        }
      >
        reviews
      </NavLink>
      <NavLink
        to="/Dashboard"
        className={({ isActive }) =>
          isActive ? "nav-link-active" : "nav-link"
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/Blogs"
        className={({ isActive }) =>
          isActive ? "nav-link-active" : "nav-link"
        }
      >
        Blogs
      </NavLink>
      <NavLink
        to="/About"
        className={({ isActive }) =>
          isActive ? "nav-link-active" : "nav-link"
        }
      >
        About
      </NavLink>
    </div>
  );
};

export default Header;
