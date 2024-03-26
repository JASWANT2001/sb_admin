import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      if (values.email === "") {
        errors.email = "Required";
      }

      if (values.lastname === "") {
        errors.lastname = "Required";
      }

      if (values.firstname === "") {
        errors.firstname = "Required";
      }
      if (values.password === "") {
        errors.password = "Required";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        const registerData = await axios.post(
          "https://demoexpress-production.up.railway.app/register",
          values
        );
        toast.success(registerData.data.message, {
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
        navigate("/");
      } catch (error) {
        console.log(error.response.data.message);
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
  let navigate = useNavigate();
  let alreadyHaveAccount = () => {
    navigate("/");
  };

  return (
    <>
      <ToastContainer />
      <div className="row mt-5"></div>
      <div class="container">
        <div class="card o-hidden border-0 shadow-lg my-5 ">
          <div class="card-body p-0 ">
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
                        {formik.getFieldMeta("firstname").touched &&
                        formik.errors.firstname ? (
                          <span
                            className="ml-3"
                            style={{ color: "red", fontSize: 12 }}
                          >
                            {formik.errors.firstname}
                          </span>
                        ) : null}
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
                        {formik.getFieldMeta("lastname").touched &&
                        formik.errors.lastname ? (
                          <span
                            className="ml-3"
                            style={{ color: "red", fontSize: 12 }}
                          >
                            {formik.errors.lastname}
                          </span>
                        ) : null}
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
                      {formik.getFieldMeta("email").touched &&
                      formik.errors.email ? (
                        <span
                          className="ml-3"
                          style={{ color: "red", fontSize: 12 }}
                        >
                          {formik.errors.email}
                        </span>
                      ) : null}
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
                        {formik.getFieldMeta("password").touched &&
                        formik.errors.password ? (
                          <span
                            className="ml-3"
                            style={{ color: "red", fontSize: 12 }}
                          >
                            {formik.errors.password}
                          </span>
                        ) : null}
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
                          <span
                            className="ml-3"
                            style={{ color: "red", fontSize: 12 }}
                          >
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
                    {/* <a class="small" href="forgot-password.html">
                      Forgot Password?
                    </a> */}
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
