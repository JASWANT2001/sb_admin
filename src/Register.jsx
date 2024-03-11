import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";

function Register() {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validate: (values) => {
      let errors = {};
      if (values.password !== values.repeatPassword) {
        errors.password = "Password and Repeat Password are not same";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        const registerData = await axios.post(
          "https://sb-admin-backend.onrender.com/register",
          values
        );
        console.log(registerData.data.message);
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
  });
  let navigate = useNavigate();
  let alreadyHaveAccount = () => {
    navigate("/");
  };

  return (
    <>
      <div class="container">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
              <div class="col-lg-7">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                  </div>
                  <form class="user" onSubmit={formik.handleSubmit}>
                    <div className="form-group row">
                      <div class="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="text"
                          class="form-control form-control-user"
                          id="exampleFirstName"
                          placeholder="First Name"
                          name="firstname"
                          value={formik.values.firstname}
                          onChange={formik.handleChange}
                        />
                      </div>
                      <div class="col-sm-6">
                        <input
                          type="text"
                          class="form-control form-control-user"
                          id="exampleLastName"
                          placeholder="Last Name"
                          name="lastname"
                          value={formik.values.lastname}
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control form-control-user"
                        id="exampleInputEmail"
                        placeholder="Email Address"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div class="form-group row">
                      <div class="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="password"
                          class="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                          name="password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                        />
                      </div>
                      <div class="col-sm-6">
                        <input
                          type="password"
                          class="form-control form-control-user"
                          id="exampleRepeatPassword"
                          placeholder="Repeat Password"
                          name="repeatPassword"
                          value={formik.values.repeatPassword}
                          onChange={formik.handleChange}
                        />
                        {formik.getFieldMeta("repeatPassword").touched &&
                        formik.errors.password ? (
                          <span style={{ color: "red", fontSize: 12 }}>
                            {formik.errors.password}
                          </span>
                        ) : null}
                      </div>
                    </div>
                    <br />
                    <button class="btn btn-primary btn-user btn-block">
                      Register Account
                    </button>
                  </form>
                  <br />
                  <hr />
                  <div class="text-center">
                    <a class="small" href="forgot-password.html">
                      Forgot Password?
                    </a>
                  </div>
                  <div class="text-center">
                    <button class="btn btn-link" onClick={alreadyHaveAccount}>
                      Already have an account? Login!
                    </button>
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

export default Register;
