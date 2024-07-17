import React from "react";
import logo from "../../assets/img/logo.png";

export const Navigation = () => {
  return (
    <>
      <header class="header-section">
        <div class="container">
          <div class="logo">
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>
          <div class="nav-menu">
            <nav class="mainmenu mobile-menu">
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
            <a href="/" class="primary-btn top-btn">
              <i class="fa fa-ticket"></i> Ticket
            </a>
          </div>
          <div id="mobile-menu-wrap"></div>
        </div>
      </header>
    </>
  );
};
