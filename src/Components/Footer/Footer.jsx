import React from "react";
import logo from "../../assets/img/footer-logo.png";

export const Footer = () => {
  return (
    <>
      <footer class="footer-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="footer-text">
                <div class="ft-logo">
                  <a href="/" class="footer-logo">
                    <img src={logo} alt="" />
                  </a>
                </div>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/">Speakers</a>
                  </li>
                  <li>
                    <a href="/">Schedule</a>
                  </li>
                  <li>
                    <a href="/">Blog</a>
                  </li>
                  <li>
                    <a href="/">Contact</a>
                  </li>
                  <li>
                    <a href="/admin-dashboard" target="_blank">Admin</a>
                  </li>
                </ul>
                <div class="copyright-text">
                  <p>
                    Copyright &copy;
                    <script>
                      document.write(new Date().getFullYear());
                    </script>{" "}
                    All rights reserved | This template is made with{" "}
                    <i class="fa fa-heart" aria-hidden="true"></i> by{" "}
                    <a
                      href="https://colorlib.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Colorlib
                    </a>
                  </p>
                </div>
                <div class="ft-social">
                  <a href="/">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="/">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="/">
                    <i class="fa fa-linkedin"></i>
                  </a>
                  <a href="/">
                    <i class="fa fa-instagram"></i>
                  </a>
                  <a href="/">
                    <i class="fa fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
