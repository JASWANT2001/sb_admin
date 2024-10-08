import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  let navigate = useNavigate();

  const LoginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};

      if (values.email === "") {
        errors.email = "Required";
      }

      if (values.password === "") {
        errors.password = "Required";
      }
      return errors;
    },

    onSubmit: async (values) => {
      try {
        let response = await axios.post(
          "https://sb-admin-backend.onrender.com/login",
          values
        );
        // setUser(response.data.loginuser.username);
        toast.success(response.data.message, {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Flip,
        });
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name", response.data.loginuser.firstname);
        navigate("/portal/dashboard");
      } catch (error) {
        toast.error(error.response.data.message, {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Flip,
        });
      }
    },
  });

  let createAccount = () => {
    navigate("/register");
  };
  return (
    <>
      <ToastContainer />
      <div className="container ">
        <div className="row justify-content-center mt-5">
          <div className="col-xl-10 col-lg-12 col-md-9 mt-4">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image">
                    <img
                      src="https://img.freepik.com/free-vector/security-concept-illustration_114360-497.jpg?t=st=1725328051~exp=1725331651~hmac=7d015128ad90758047f921e58e2c1528a31821af028ca1bc14cba5c8d9febea0&w=740"
                      alt=""
                      style={{
                        width: "400px",
                        height: "370px",
                        marginLeft: "60px",
                        marginTop: "25px",
                      }}
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h4 className="text-gray-700 mb-4">Welcome To Admin Zen</h4>
                      </div>
                      <form className="user" onSubmit={LoginForm.handleSubmit}>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address"
                            name="email"
                            value={LoginForm.values.email}
                            onChange={LoginForm.handleChange}
                          />
                          {LoginForm.getFieldMeta("email").touched &&
                          LoginForm.errors.email ? (
                            <span
                              className="ml-3"
                              style={{ color: "red", fontSize: 14 }}
                            >
                              {LoginForm.errors.email}
                            </span>
                          ) : null}
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Enter Password"
                            name="password"
                            value={LoginForm.values.password}
                            onChange={LoginForm.handleChange}
                          />
                          {LoginForm.getFieldMeta("password").touched &&
                          LoginForm.errors.password ? (
                            <span
                              className="ml-3"
                              style={{ color: "red", fontSize: 14 }}
                            >
                              {LoginForm.errors.password}
                            </span>
                          ) : null}
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              className="custom-control-label"
                              for="customCheck"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <button
                          href="index.html"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Login
                        </button>

                        {/* <a
                          href="index.html"
                          className="btn btn-google btn-user btn-block"
                        >
                          <i className="fab fa-google fa-fw"></i> Login with
                          Google
                        </a> */}
                      </form>
                      <hr />
                      {/* <div className="text-center">
                        <a className="small" href="forgot-password.html">
                          Forgot Password?
                        </a>
                      </div> */}

                      <div className="text-center">
                        <button
                          className="btn btn-link btn-user btn-block"
                          onClick={createAccount}
                        >
                          Create an Account!
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
