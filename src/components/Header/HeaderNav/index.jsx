import React from "react";
import logo from "../../../assets/image/logo.png"
import search from "../../../assets/image/search.png"

const HeaderNav = () => {
  return (
    <div className="header-nav">
      <div className="container">
        <div className="content">
          <a href="/" className="logo">
            <img src={logo} alt="logo" />
          </a>
          <nav className="header-nav__navv">
            <div className="header-nav__nav-link">
              <img src={search} alt="search" />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;