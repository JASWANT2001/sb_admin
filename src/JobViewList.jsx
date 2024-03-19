import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer, Flip } from "react-toastify";

function JobViewList() {
  const [loading, setLoading] = useState(true);
  const [job, setJob] = useState([]);

  const notifyError = () => {
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
  };

  async function getJobData() {
    try {
      const jobData = await axios.get(
        "https://sb-admin-backend.onrender.com/job",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      console.log(jobData.data.id);
      setJob([...jobData.data]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      notifyError();
    }
  }

  useEffect(() => {
    getJobData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://sb-admin-backend.onrender.com/job/${id}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      toast.error("Job Deleted Successfully", {
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
      getJobData();
    } catch (error) {
      console.log(error);
      notifyError();
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
        <h1 className="h3 mb-0 text-gray-800">Job Vacancy Details</h1>
        <Link to="/portal/jobcreate" className="btn btn-primary">
          Create New Job
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
                  cellSpacing="0"
                >
                  <thead>
                    <tr>
                      <th>Job Type</th>
                      <th>Experience Required</th>
                      <th>Position</th>
                      <th>Notice Period</th>
                      <th>Work Location</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {job.map((jobData) => (
                      <tr key={jobData.id}>
                        <td>{jobData.type}</td>
                        <td>{jobData.experincerequired}</td>
                        <td>{jobData.position}</td>
                        <td>{jobData.noticeperiod}</td>
                        <td>{jobData.worklocation}</td>
                        <td>{jobData.status}</td>
                        <td>
                          <button
                            onClick={() => handleDelete(jobData._id)}
                            className="btn btn-danger ml-2"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
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

export default JobViewList;
