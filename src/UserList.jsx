import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function UserList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  async function GetData() {
    try {
      const employeeList = await axios.get(
        "https://sb-admin-backend.onrender.com",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      setEmployees([...employeeList.data]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  }
  useEffect(() => {
    GetData();
  }, []);

  let handleDelete = async (id) => {
    try {
      await axios.delete(`https://sb-admin-backend.onrender.com/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      alert("Data Deleted");
      GetData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Users List</h1>
        <Link
          to="/portal/create-user"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Create User
        </Link>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            DataTables Example
          </h6>
          <div className="card-body">
            <div className="table-responsive">
              {loading ? (
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              ) : (
                <table
                  className="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellspacing="0"
                >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Start date</th>
                      <th>Salary</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Start date</th>
                      <th>Salary</th>
                      <th>Action</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    {employees.map((employee) => {
                      return (
                        <tr key={employee.id}>
                          <td>{employee.username}</td>
                          <td> {employee.position}</td>
                          <td>{employee.office}</td>
                          <td>{employee.dob}</td>
                          <td>{employee.startdate}</td>
                          <td>{employee.salary}</td>
                          <td>
                            <Link
                              to={`/portal/view-user/${employee._id}`}
                              className="btn btn-info "
                            >
                              View
                            </Link>
                            <Link
                              to={`/portal/edit-user/${employee._id}`}
                              className="btn btn-warning ml-2"
                            >
                              Edit
                            </Link>
                            <button
                              onClick={() => {
                                handleDelete(employee._id);
                              }}
                              className="btn btn-danger ml-2"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserList;
