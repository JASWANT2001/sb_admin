import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewUser() {
  const params = useParams();
  const [employeeDetail, setEmployeeDetail] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let employee = await axios.get(
          `https://sb-admin-backend.onrender.com/employee/${params.id}`,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        setEmployeeDetail(employee.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <br />
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h5 class="m-0 font-weight-bold text-primary">
                {employeeDetail?.username}'s Details
              </h5>
            </div>
            <div class="card-body">
              <div className="row">
                <div className="col-lg-4">
                  <label className="form-label">
                    <b>Full Name</b>
                  </label>
                  <div>{employeeDetail?.username}</div>
                </div>
                <div className="col-lg-4">
                  <label className="form-label">
                    <b>Designation</b>
                  </label>
                  <div>{employeeDetail?.position}</div>
                </div>
                <div className="col-lg-4">
                  <label className="form-label">
                    <b>Work Place</b>
                  </label>
                  <div>{employeeDetail?.office}</div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-4">
                  <label className="form-label">
                    <b>Age</b>
                  </label>
                  <div>{employeeDetail?.dob}</div>
                </div>
                <div className="col-lg-4">
                  <label className="form-label">
                    <b>StartDate</b>
                  </label>
                  <div>{employeeDetail?.startdate}</div>
                </div>
                <div className="col-lg-4">
                  <label className="form-label">
                    <b>Salary</b>
                  </label>
                  <div>{employeeDetail?.salary}</div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-4">
                  <label className="form-label">
                    <b>Email</b>
                  </label>

                  <div>{employeeDetail?.email}</div>
                </div>
                <div className="col-lg-4">
                  <label className="form-label">
                    <b>Number</b>
                  </label>
                  <div>{employeeDetail?.number}</div>
                </div>
                <div className="col-lg-4">
                  <label className="form-label">
                    <b>Location</b>
                  </label>
                  <div>{employeeDetail?.location}</div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-4">
                  <label className="form-label">
                    <b>State</b>
                  </label>
                  <div>{employeeDetail?.state}</div>
                </div>
                <div className="col-lg-4">
                  <label className="form-label">
                    <b>Country</b>
                  </label>
                  <div>{employeeDetail?.country}</div>
                </div>
                <div className="col-lg-4">
                  <label className="form-label">
                    <b>ZipCode</b>
                  </label>
                  <div>{employeeDetail?.zipcode}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="row ml-0">
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
        </>
      )}
    </>
  );
}

export default ViewUser;
