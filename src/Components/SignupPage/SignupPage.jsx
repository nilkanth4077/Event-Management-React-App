import React from "react";

export const SignupPage = () => {
  return (
    <>
      <div>
        <section className="vh-100">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <form>
                  <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <p className="lead fw-normal mb-0 me-3">
                      New User Registration:
                    </p>
                  </div>

                  <div className="divider d-flex align-items-center my-4"></div>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example6">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="form3Example6"
                      className="form-control form-control-lg"
                      placeholder="Only alphabetical inputs"
                    />
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="form3Example5"
                      className="form-control form-control-lg"
                      placeholder="Only alphabetical inputs"
                    />
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control form-control-lg"
                      placeholder="Enter a valid email address"
                    />
                  </div>

                  <div data-mdb-input-init className="form-outline mb-3">
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control form-control-lg"
                      placeholder="Enter password"
                    />
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button
                      type="button"
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-primary btn-lg"
                      style={{ paddingInline: "2.5rem" }}
                    >
                      Register
                    </button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      Already a member?{" "}
                      <a href="/login" className="link-danger">
                        SignIn
                      </a>
                    </p>
                  </div>
                </form>
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          
        </section>
      </div>
    </>
  );
};
