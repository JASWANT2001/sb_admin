import React from "react";
import { formik, useFormik } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast, ToastContainer, Flip } from "react-toastify";

function JobCreate() {
  const formik = useFormik({
    initialValues: {
      type: "",
      experincerequired: "",
      position: "",
      noticeperiod: "",
      worklocation: "",
      status: "",
    },

    validate: (values) => {
      let errors = {};

      if (values.type === "") {
        errors.type = "Required";
      }
      if (values.experincerequired === "") {
        errors.experincerequired = "Required";
      }

      if (values.position === "") {
        errors.position = "Required";
      }

      if (values.noticeperiod === "") {
        errors.noticeperiod = "Required";
      }

      if (values.worklocation === "") {
        errors.worklocation = "Required";
      }

      if (values.status === "") {
        errors.status = "Required";
      }

      return errors;
    },
    onSubmit: async (values, formikBag) => {
      try {
        await axios.post(
          "https://easy-puce-tweed-jacket.cyclic.app/job",
          values
        );
        toast.success("Job Data Successfully Created", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        formikBag.resetForm();
      } catch (error) {
        console.log(error);
        toast.error("Job Data is not Created", {
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
                      <label>Type</label>
                      <input
                        type="text"
                        className="form-control"
                        name="type"
                        value={formik.values.type}
                        onChange={formik.handleChange}
                      ></input>
                      {formik.getFieldMeta("type").touched ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.type}
                        </span>
                      ) : null}
                    </div>
                    <div className="col-lg-4">
                      <label>Experince Required</label>
                      <input
                        type="number"
                        className="form-control"
                        name="experincerequired"
                        value={formik.values.experincerequired}
                        onChange={formik.handleChange}
                      ></input>
                      {formik.getFieldMeta("experincerequired").touched ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.experincerequired}
                        </span>
                      ) : null}
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
                      {formik.getFieldMeta("position").touched ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.position}
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-lg-4">
                      <label>Notice Period</label>
                      <input
                        type="number"
                        className="form-control"
                        name="noticeperiod"
                        value={formik.values.noticeperiod}
                        onChange={formik.handleChange}
                      ></input>
                      {formik.getFieldMeta("noticeperiod").touched ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.noticeperiod}
                        </span>
                      ) : null}
                    </div>
                    <div className="col-lg-4">
                      <label>Work Location</label>
                      <input
                        type="text"
                        className="form-control"
                        name="worklocation"
                        value={formik.values.worklocation}
                        onChange={formik.handleChange}
                      ></input>
                      {formik.getFieldMeta("worklocation").touched ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.worklocation}
                        </span>
                      ) : null}
                    </div>
                    <div className="col-lg-4">
                      <label>Status</label>
                      <input
                        type="text"
                        className="form-control"
                        name="status"
                        value={formik.values.status}
                        onChange={formik.handleChange}
                      ></input>
                      {formik.getFieldMeta("status").touched ? (
                        <span style={{ color: "red" }}>
                          {formik.errors.status}
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 mt-4 ">
                      <Link
                        className="btn btn-secondary btn-icon-split"
                        to="/portal/jobviewlist"
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

export default JobCreate;
