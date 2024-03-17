import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer, Flip } from "react-toastify";

function UserList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  async function GetData() {
    try {
      const employeeList = await axios.get(
        "https://easy-puce-tweed-jacket.cyclic.app/employee",
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
      toast.error("Something Went Wrong", {
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
  }
  useEffect(() => {
    GetData();
  }, []);

  let handleDelete = async (id) => {
    try {
      await axios.delete(`https://easy-puce-tweed-jacket.cyclic.app/employee/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      toast.error("User Deleted Successfully", {
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
      GetData();
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong", {
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
  };

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
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Employee Directory</h1>
        <Link to="/portal/create-user" className="btn btn-primary">
          Create New User
        </Link>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
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
                      <th>Designation</th>
                      <th>Work Place</th>
                      <th>Age</th>
                      <th>Start date</th>
                      <th>Salary</th>
                      <th>Action's</th>
                    </tr>
                  </thead>
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
