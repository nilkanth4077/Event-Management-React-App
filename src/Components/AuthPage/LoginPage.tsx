import React, { useState, FormEvent, ChangeEvent } from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import Api from "../../API/Api";

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const userData = await Api.login(email, password);
      console.log("Login response:", userData);

      if (userData.token) {
        localStorage.setItem("token", userData.token);
        localStorage.setItem("role", userData.role);
        localStorage.setItem("email", userData.email);
        navigate("/home");
      } else {
        console.log("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <section className="contact-from-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Login To Your Account !</h2>
              <p>
                Fill out the form below to receive a free and confidential
                initial consultation.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form onSubmit={handleSubmit} className="comment-form contact-form">
              <div className="row">
                <div className="col-lg-6">
                  <input
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="col-lg-12 text-center">
                  <button type="submit" className="site-btn">
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
  );
};
