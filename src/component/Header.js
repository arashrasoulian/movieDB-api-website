import React from "react";
import { Link } from "react-router-dom";
// import {logo} from "../images/logo.svg"
export function Header() {
  return (
    <div className="navbar-style">
      <ul>
        <li>
          <img src="/image/logo.svg" alt="logo" />
        </li>
        <li>
          <Link to="/">home</Link>
        </li>
        <li><Link to="/year">movie 2022</Link></li>
        <li>movie trailers</li>
        <li>about</li>
        <li>write for us    </li> 
      </ul>

      <input type={"text"} placeholder={"search"} className="search-input" />
    </div>
  );
}
