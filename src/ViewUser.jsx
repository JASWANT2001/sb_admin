import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
    <div>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h5 class="m-0 font-weight-bold text-primary">
              Hi, {employeeDetail?.username}
            </h5>
          </div>
          <div class="card-body">
            <div className="row">
              <div className="col-lg-4">
                <div>{employeeDetail?.username}</div>
              </div>
              <div className="col-lg-4">
                <div>{employeeDetail?.position}</div>
              </div>
              <div className="col-lg-4">
                <div>{employeeDetail?.office}</div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-4">
                <div>{employeeDetail?.dob}</div>
              </div>
              <div className="col-lg-4">
                <div>{employeeDetail?.startdate}</div>
              </div>
              <div className="col-lg-4">
                <div>{employeeDetail?.salary}</div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-4">
                <div>{employeeDetail?.email}</div>
              </div>
              <div className="col-lg-4">
                <div>{employeeDetail?.number}</div>
              </div>
              <div className="col-lg-4">
                <div>{employeeDetail?.location}</div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-4">
                <div>{employeeDetail?.state}</div>
              </div>
              <div className="col-lg-4">
                <div>{employeeDetail?.country}</div>
              </div>
              <div className="col-lg-4">
                <div>{employeeDetail?.zipcode}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewUser;
