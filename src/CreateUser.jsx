import React from "react";
import { formik, useFormik } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast, ToastContainer, Bounce } from "react-toastify";

function CreateUser() {
  const formik = useFormik({
    initialValues: {
      username: "",
      position: "",
      office: "",
      dob: "",
      startdate: "",
      salary: "",
      email: "",
      number: "",
      location: "",
      state: "",
      country: "",
      zipcode: "",
    },

    validate: (values) => {
      let errors = {};

      if (values.username === "") {
        errors.username = "Required";
      } else if (values.username.length <= 3 || values.username.length > 15) {
        errors.username = "Please enter characters above 3 to 15";
      }

      if (values.position === "") {
        errors.position = "Required";
      }

      if (values.office === "") {
        errors.office = "Required";
      }

      if (values.dob === "") {
        errors.dob = "Required";
      }

      if (values.startdate === "") {
        errors.startdate = "Required";
      }

      if (values.salary === "") {
        errors.salary = "Required";
      }
      if (values.email === "") {
        errors.email = "Required";
      }
      if (values.number === "") {
        errors.number = "Required";
      }
      if (values.location === "") {
        errors.location = "Required";
      }
      if (values.state === "") {
        errors.state = "Required";
      }
      if (values.country === "") {
        errors.country = "Required";
      }
      if (values.zipcode === "") {
        errors.zipcode = "Required";
      }

      return errors;
    },

    onSubmit: async (values) => {
      try {
        await axios.post("https://sb-admin-backend.onrender.com/", values, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        console.log(values);
        toast.success("User Successfully Created", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      } catch (error) {
        toast.danger("User Not Created", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        console.log(error);
      }
    },
  });

  return (
    <>
      <ToastContainer />
      <div className="container-fluid">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-4">
              <h6 className="h4 mb-0 text-gray-800">Employee Details</h6>
            </div>
          </div>
          <div className="card shadow mb-4 mt-4">
            <div className="card-header py-3">
              <div className="card-body">
                <div className="table">
                  <div className="row">
                    <div className="col-lg-4">
                      <label>Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                      ></input>
                      <span style={{ color: "red" }}>
                        {formik.errors.username}
                      </span>
                    </div>
                    <div className="col-lg-4">
                      <label>Designation</label>
                      <input
                        type="text"
                        className="form-control"
                        name="position"
                        value={formik.values.position}
                        onChange={formik.handleChange}
                      ></input>
                      <span style={{ color: "red" }}>
                        {formik.errors.position}
                      </span>
                    </div>
                    <div className="col-lg-4">
                      <label>Work Place</label>
                      <input
                        type="text"
                        className="form-control"
                        name="office"
                        value={formik.values.office}
                        onChange={formik.handleChange}
                      ></input>
                      <span style={{ color: "red" }}>
                        {formik.errors.office}
                      </span>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-lg-4">
                      <label>Age</label>
                      <input
                        type="number"
                        className="form-control"
                        name="dob"
                        value={formik.values.dob}
                        onChange={formik.handleChange}
                      ></input>
                      <span style={{ color: "red" }}>{formik.errors.dob}</span>
                    </div>
                    <div className="col-lg-4">
                      <label>Start date</label>
                      <input
                        type="date"
                        className="form-control"
                        name="startdate"
                        value={formik.values.startdate}
                        onChange={formik.handleChange}
                      ></input>
                      <span style={{ color: "red" }}>
                        {formik.errors.startdate}
                      </span>
                    </div>
                    <div className="col-lg-4">
                      <label>Salary</label>
                      <input
                        type="text"
                        className="form-control"
                        name="salary"
                        value={formik.values.salary}
                        onChange={formik.handleChange}
                      ></input>
                      <span style={{ color: "red" }}>
                        {formik.errors.salary}
                      </span>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-lg-4">
                      <label>Personal Email</label>
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                      ></input>
                      <span style={{ color: "red" }}>
                        {formik.errors.email}
                      </span>
                    </div>
                    <div className="col-lg-4">
                      <label>Contact Number</label>
                      <input
                        type="number"
                        className="form-control"
                        name="number"
                        value={formik.values.number}
                        onChange={formik.handleChange}
                      ></input>
                      <span style={{ color: "red" }}>
                        {formik.errors.number}
                      </span>
                    </div>
                    <div className="col-lg-4">
                      <label>Current Location</label>
                      <input
                        type="text"
                        className="form-control"
                        name="location"
                        value={formik.values.location}
                        onChange={formik.handleChange}
                      ></input>
                      <span style={{ color: "red" }}>
                        {formik.errors.location}
                      </span>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-lg-4">
                      <label>State</label>
                      <input
                        type="text"
                        className="form-control"
                        name="state"
                        value={formik.values.state}
                        onChange={formik.handleChange}
                      ></input>
                      <span style={{ color: "red" }}>
                        {formik.errors.state}
                      </span>
                    </div>
                    <div className="col-lg-4">
                      <label>Country </label>
                      <input
                        type="text"
                        className="form-control"
                        name="country"
                        value={formik.values.country}
                        onChange={formik.handleChange}
                      ></input>
                      <span style={{ color: "red" }}>
                        {formik.errors.country}
                      </span>
                    </div>
                    <div className="col-lg-4">
                      <label>Zip Code </label>
                      <input
                        type="number"
                        className="form-control"
                        name="zipcode"
                        value={formik.values.zipcode}
                        onChange={formik.handleChange}
                      ></input>
                      <span style={{ color: "red" }}>
                        {formik.errors.zipcode}
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 mt-4">
                      <button className="btn btn-primary" value={"Submit"}>
                        Submit
                      </button>
                    </div>
                    <div className="col-lg-6 mt-4 d-flex justify-content-end">
                      <Link
                        className="btn btn-secondary"
                        to="/portal/user-list"
                      >
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateUser;
