import React from "react";
import { formik, useFormik } from "formik";
import axios from "axios";

function CreateUser() {
  const formik = useFormik({
    initialValues: {
      username: "",
      position: "",
      office: "",
      dob: "",
      startdate: "",
      salary: "",
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
        alert("Data Posted");
      } catch (error) {
        alert("Something went wrong");
        console.log(error);
      }
    },
  });

  return (
    <>
      <div className="container-fluid">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-4">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
              ></input>
              <span style={{ color: "red" }}>{formik.errors.username}</span>
            </div>
            <div className="col-lg-4">
              <label>Position</label>
              <input
                type="text"
                className="form-control"
                name="position"
                value={formik.values.position}
                onChange={formik.handleChange}
              ></input>
              <span style={{ color: "red" }}>{formik.errors.position}</span>
            </div>
            <div className="col-lg-4">
              <label>Office</label>
              <input
                type="text"
                className="form-control"
                name="office"
                value={formik.values.office}
                onChange={formik.handleChange}
              ></input>
              <span style={{ color: "red" }}>{formik.errors.office}</span>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <label>Age</label>
              <input
                type="date"
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
              <span style={{ color: "red" }}>{formik.errors.startdate}</span>
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
              <span style={{ color: "red" }}>{formik.errors.salary}</span>
            </div>
            <div className="col-lg-12 mt-4">
              <button className="btn btn-primary" value={"Submit"}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateUser;
