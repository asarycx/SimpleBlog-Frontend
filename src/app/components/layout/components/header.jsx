import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="site-header">
      <Link to="/" className="site-header__brand">
        Asary
      </Link>
      <div className="site-header__menu">
        <Link to="" className="site-header__menu__child">
          Menu 1
        </Link>
        <Link to="" className="site-header__menu__child">
          Menu 2
        </Link>
        <Link to="" className="site-header__menu__child">
          Menu 3
        </Link>
      </div>
    </div>
  );
}
