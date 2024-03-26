import React from "react";
import { formik, useFormik } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast, ToastContainer, Flip } from "react-toastify";

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

    onSubmit: async (values, reset) => {
      try {
        await axios.post("https://demoexpress-production.up.railway.app/employee", values, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        console.log(values);
        toast.success("User Successfully Created", {
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
        reset.resetForm();
      } catch (error) {
        toast.error("User Not Created", {
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
        console.log(error);
      }
    },
  });

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Flip}
      />
      <div className="container-fluid">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            {/* <div className="col-lg-4">
              <h6 className="h4 mb-0 text-gray-800">Employee Details</h6>
            </div> */}
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
                      {formik.getFieldMeta("username").touched ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.username}
                        </span>
                      ) : null}
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
                      {formik.getFieldMeta("position").touched ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.position}
                        </span>
                      ) : null}
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
                      {formik.getFieldMeta("office").touched ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.office}
                        </span>
                      ) : null}
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
                      {formik.getFieldMeta("dob").touched ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.dob}
                        </span>
                      ) : null}
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
                      {formik.getFieldMeta("startdate").touched ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.startdate}
                        </span>
                      ) : null}
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
                      {formik.getFieldMeta("salary").touched ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.salary}
                        </span>
                      ) : null}
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
                      {formik.getFieldMeta("email").touched ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.email}
                        </span>
                      ) : null}
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
                      {formik.getFieldMeta("number").touched ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.number}
                        </span>
                      ) : null}
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
                      {formik.getFieldMeta("location").touched ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.location}
                        </span>
                      ) : null}
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
                      {formik.getFieldMeta("state").touched ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.state}
                        </span>
                      ) : null}
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
                      {formik.getFieldMeta("country").touched ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.country}
                        </span>
                      ) : null}
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
                      {formik.getFieldMeta("zipcode").touched ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.zipcode}
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 mt-4 ">
                      <Link
                        className="btn btn-secondary btn-icon-split"
                        to="/portal/user-list"
                      >
                        <span class="icon text-white-50">
                          <i class="fas fa-arrow-left"></i>
                        </span>
                        <span class="text">Back</span>
                      </Link>
                    </div>
                    <div className="col-lg-6 mt-4 d-flex justify-content-end">
                      <button className="btn btn-primary" value={"Submit"}>
                        Submit
                      </button>
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
