import React, { useState } from "react";
import '../../App.css';
import { useNavigate } from "react-router-dom";
import Api from "../../API/Api";

export const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await Api.login(email, password);
      if(userData.token){
        localStorage.setItem('token', userData.token)
        localStorage.setItem('role', userData.role)
        localStorage.setItem('email', userData.email)
        navigate('/home')
      }else{
        setError(userData.error)
      }
    } catch (error) {
      console.log(error);
      setError(error)
      setTimeout(() => {
        setError('');
      }, 5000);
    }
  }

  return (
    <>
      <div>
        <section className="vh-100">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form onSubmit={handleSubmit}>
                  <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                    <button
                      type="button"
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-primary btn-floating mx-1"
                    >
                      <i className="fab fa-google"></i>
                    </button>

                    <button
                      type="button"
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-primary btn-floating mx-1"
                    >
                      <i className="fab fa-github"></i>
                    </button>
                  </div>

                  <div className="divider d-flex align-items-center my-4">
                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                  </div>
                  {error && <p className="text-danger">{error}</p>}
                  <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="form3Example3"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control form-control-lg"
                      placeholder="Enter a valid email address"
                      required
                    />
                  </div>

                  <div data-mdb-input-init className="form-outline mb-3">
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                    <input
                      type="password"
                      id="form3Example4"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control form-control-lg"
                      placeholder="Enter password"
                      required
                    />
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3"
                      />
                      <label className="form-check-label" htmlFor="form2Example3">
                        Remember me
                      </label>
                    </div>
                    <a href="#!" className="text-body">
                      Forgot password?
                    </a>
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button
                      type="submit"
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-primary btn-lg"
                      style={{paddingInline: '2.5rem'}}
                    >
                      Login
                    </button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      Don't have an account?{" "}
                      <a href="/signup" className="link-danger">
                        Register
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
