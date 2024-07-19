import React, { useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { MenuItem } from "@mui/material";
import Api from "../../API/Api";

export const Navigation: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogOut = () => {
    Api.logout();
  }

  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest(".dropdown") === null) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header-section">
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src="/logo.png" alt="Logo" />
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
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contact">Contacts</a>
              </li>
            </ul>
          </nav>
          {true ? (
            <a href="/auth" className="primary-btn top-btn">
              Login
            </a>
          ) : (
            <div
              className="dropdown primary-btn top-btn"
              onClick={toggleDropdown}
            >
              <PersonIcon /> Username
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                </div>
              )}
            </div>
          )}
        </div>
        <div id="mobile-menu-wrap"></div>
      </div>
    </header>
  );
};
