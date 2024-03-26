import { useState } from "react";
import React, { useEffect } from "react";
import Card from "./Card";
import Area from "./Area";
import axios from "axios";

function Dashboard() {
  const [count, setCount] = useState();
  const [jobcount, setJobcount] = useState();

  let getData = async () => {
    try {
      let primData = await axios.get(
        "https://demoexpress-production.up.railway.app/employee",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      setCount(primData.data.length);
    } catch (error) {
      console.log(error);
    }
  };
  let jobData = async () => {
    try {
      let primData = await axios.get(
        "https://demoexpress-production.up.railway.app/job",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      setJobcount(primData.data.length);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    jobData();
  }, []);

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <button href="#" className="btn btn-primary">
          Generate Report
        </button>
      </div>
      <div className="row">
        <Card text="Earnings (annual)" rupess="$215,000" />
        <Card text="Earnings (monthly)" rupess="$40,000" />
        <Card text="Current Employee's" rupess={count} />
        <Card text="Job Vacancy" rupess={jobcount} />
      </div>
      <div className="row">
        <Area></Area>
      </div>
    </>
  );
}

export default Dashboard;
