import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../API/Api";
import "../SignupPage/SignupPage.css";

export const SignupPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Api.register(formData);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "",
      });
      alert("Registration Successfull");
      navigate("/login");
    } catch (error) {
      console.log("Error occurred: ", error);
      alert("Something Wrong");
    }
  };

  return (
    <>
      <section className="contact-from-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Register Yourself !</h2>
                <p>
                  Fill out the form below to recieve a free and confidential
                  intial consultation.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form onSubmit={handleSubmit} className="comment-form contact-form">
                <div className="row">
                  <div className="col-lg-4">
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-lg-4">
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-lg-4">
                    <input
                      id="role"
                      name="role"
                      type="text"
                      placeholder="Role"
                      value={formData.role}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-lg-12 text-center">
                    <button type="submit" className="site-btn">
                      Register
                    </button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      Already have an account?{" "}
                      <a href="/login" className="link-danger">
                        Login
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
