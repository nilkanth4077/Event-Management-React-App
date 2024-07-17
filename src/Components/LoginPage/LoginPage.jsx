import React, { useState } from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import Api from "../../API/Api";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await Api.login(email, password);
      if (userData.token) {
        localStorage.setItem("token", userData.token);
        localStorage.setItem("role", userData.role);
        localStorage.setItem("email", userData.email);
        console.log(userData.email, email, password, userData.token)
        navigate("/home");
      } else {
        setError(userData.error);
      }
    } catch (error) {
      console.log(error);
      setError(error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <>
      <section class="contact-from-section spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title">
                <h2>Login To Your Account !</h2>
                <p>
                  Fill out the form below to recieve a free and confidential
                  intial consultation.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <form onSubmit={handleSubmit} class="comment-form contact-form">
                <div class="row">
                  <div class="col-lg-6">
                    <input
                      id="email"
                      name="email"
                      placeholder="Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div class="col-lg-6">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div class="col-lg-12 text-center">
                    <button type="submit" class="site-btn">
                      Login
                    </button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      Don't have an account?{" "}
                      <a href="/signup" className="link-danger">
                        Register
                      </a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
