import React from "react";
import logo from "../../assets/img/logo.png";

export const Navigation = () => {
  return (
    <>
      <header className="header-section">
        <div className="container">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="nav-menu">
            <nav className="mainmenu mobile-menu">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/signup">Signup</a>
                </li>
                <li>
                  <a href="/login">Login</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/contact">Contacts</a>
                </li>
              </ul>
            </nav>
            <a href="/" className="primary-btn top-btn">
              <i className="fa fa-ticket"></i> Ticket
            </a>
          </div>
          <div id="mobile-menu-wrap"></div>
        </div>
      </header>
    </>
  );
};
