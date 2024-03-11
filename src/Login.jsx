import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  const LoginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      try {
        let response = await axios.post(
          "https://sb-admin-backend.onrender.com/login",
          values
        );
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        navigate("/portal/dashboard");
      } catch (error) {
        console.log(error);
        alert("Something went Wrong");
      }
    },
  });

  let createAccount = () => {
    navigate("/register");
  };
  return (
    <>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-10 col-lg-12 col-md-9">
            <div class="card o-hidden border-0 shadow-lg my-5">
              <div class="card-body p-0">
                <div class="row">
                  <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div class="col-lg-6">
                    <div class="p-5">
                      <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form class="user" onSubmit={LoginForm.handleSubmit}>
                        <div class="form-group">
                          <input
                            type="email"
                            class="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                            name="email"
                            value={LoginForm.values.email}
                            onChange={LoginForm.handleChange}
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="password"
                            class="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Enter Password"
                            name="password"
                            value={LoginForm.values.password}
                            onChange={LoginForm.handleChange}
                          />
                        </div>
                        <div class="form-group">
                          <div class="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              class="custom-control-label"
                              for="customCheck"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <button
                          href="index.html"
                          class="btn btn-primary btn-user btn-block"
                        >
                          Login
                        </button>

                        <a
                          href="index.html"
                          class="btn btn-google btn-user btn-block"
                        >
                          <i class="fab fa-google fa-fw"></i> Login with Google
                        </a>
                      </form>
                      <hr />
                      <div class="text-center">
                        <a class="small" href="forgot-password.html">
                          Forgot Password?
                        </a>
                      </div>

                      <div class="text-center">
                        <button
                          class="btn btn-link btn-user btn-block"
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
