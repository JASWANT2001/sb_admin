import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ViewUser() {
  const params = useParams();
  const [employeeDetail, setEmployeeDetail] = useState();

  useEffect(() => {
    let fetchData = async () => {
      try {
        let employee = await axios.get(
          `https://sb-admin-backend.onrender.com/${params.id}`
        );
        setEmployeeDetail(employee.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div>{employeeDetail?.username}</div>
      <div>{employeeDetail?.position}</div>
      <div>{employeeDetail?.office}</div>
      <div>{employeeDetail?.dob}</div>
      <div>{employeeDetail?.startdate}</div>
      <div>{employeeDetail?.salary}</div>
    </div>
  );
}

export default ViewUser;
