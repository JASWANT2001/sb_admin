import React from "react";
import Card from "./Card";
import Area from "./Area";

function Dashboard() {
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
          Report
        </a>
      </div>
      <div className="row">
        <Card text="Earnings (monthly)" rupess="$40,000" />
        <Card text="Earnings (annual)" rupess="$215,000" />
        <Card text="Task" rupess="50%" />
        <Card text="pending Request" rupess="18" />
      </div>
      <div className="row">
        <Area></Area>
      </div>
    </>
  );
}

export default Dashboard;
