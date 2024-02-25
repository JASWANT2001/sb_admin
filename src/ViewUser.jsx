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
          `https://sb-admin-backend.onrender.com/${params.id}`
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
      {
      loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          <div>{employeeDetail?.username}</div>
          <div>{employeeDetail?.position}</div>
          <div>{employeeDetail?.office}</div>
          <div>{employeeDetail?.dob}</div>
          <div>{employeeDetail?.startdate}</div>
          <div>{employeeDetail?.salary}</div>
        </div>
      )}
    </div>
  );
}

export default ViewUser;
