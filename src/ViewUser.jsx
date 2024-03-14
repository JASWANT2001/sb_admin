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
          `https://sb-admin-backend.onrender.com/${params.id}`,
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
                    <h6 className="h4 mb-0 text-gray-800">Full Name</h6>
                  </label>
                  <div>{employeeDetail?.username}</div>
                </div>
                <div className="col-lg-4">
                  <label className="form-label">
                    <h6 className="h4 mb-0 text-gray-800">Designation</h6>
                  </label>
                  <div>{employeeDetail?.position}</div>
                </div>
                <div className="col-lg-4">
                  <label className="form-label">
                    <h6 className="h4 mb-0 text-gray-800">Work Place </h6>
                  </label>
                  <div>{employeeDetail?.office}</div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-4">
                  <label className="form-label">
                    <h6 className="h4 mb-0 text-gray-800">Age</h6>
                  </label>
                  <div>{employeeDetail?.dob}</div>
                </div>
                <div className="col-lg-4">
                  <label className="form-label">
                    <h6 className="h4 mb-0 text-gray-800">Start Date</h6>
                  </label>
                  <div>{employeeDetail?.startdate}</div>
                </div>
                <div className="col-lg-4">
                  <label className="form-label">
                    <h6 className="h4 mb-0 text-gray-800">Salary</h6>
                  </label>
                  <div>{employeeDetail?.salary}</div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-4">
                  <label className="form-label">
                    <h6 className="h4 mb-0 text-gray-800">Email Address</h6>
                  </label>

                  <div>{employeeDetail?.email}</div>
                </div>
                <div className="col-lg-4">
                  <label className="form-label">
                    <h6 className="h4 mb-0 text-gray-800">Contact Number</h6>
                  </label>
                  <div>{employeeDetail?.number}</div>
                </div>
                <div className="col-lg-4">
                  <label className="form-label">
                    <h6 className="h4 mb-0 text-gray-800">Location</h6>
                  </label>
                  <div>{employeeDetail?.location}</div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-4">
                  <label className="form-label">
                    <h6 className="h4 mb-0 text-gray-800">State</h6>
                  </label>
                  <div>{employeeDetail?.state}</div>
                </div>
                <div className="col-lg-4">
                  <label className="form-label">
                    <h6 className="h4 mb-0 text-gray-800">Country</h6>
                  </label>
                  <div>{employeeDetail?.country}</div>
                </div>
                <div className="col-lg-4">
                  <label className="form-label">
                    <h6 className="h4 mb-0 text-gray-800">ZipCode</h6>
                  </label>
                  <div>{employeeDetail?.zipcode}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <Link className="btn btn-secondary" to="/portal/user-list">
              Back
            </Link>
          </div>
        </>
      )}
    </>
  );
}

export default ViewUser;
