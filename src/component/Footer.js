import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className="footer-body">
      <ul>
        {/* <li>
          <img src="/image/instageram.jpg" alt="logo" />
        </li> */}
        <li>
          <Link to="/">home</Link>
        </li>
        <li>contact us</li>
        <li>write for us</li>
        <li>about us</li>
        <li></li>
      </ul>
    </div>
  );
}
