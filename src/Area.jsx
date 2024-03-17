import React from "react";
import Image1 from "./Imges/Revennue.png";
import areachart from "./Imges/areachart.png";

function Area() {
  return (
    <>
      <div class="col-xl-8 col-lg-7">
        <div class="card shadow mb-4">
          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">Earnings Overview</h6>
            <div class="dropdown no-arrow"></div>
          </div>

          <div class="card-body">
            <div class="chart-area">
              <img
                src={areachart}
                alt=""
                style={{ height: "330px", width: "800px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-4 col-lg-5">
        <div class="card shadow mb-4">
          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">Revenue Sources</h6>
          </div>

          <div class="card-body">
            <div>
              <img
                src={Image1}
                alt=""
                style={{ width: "380px", height: "278px" }}
              />
            </div>
            <div class="mt-4 text-center small">
              <span class="mr-2">
                <i class="fas fa-circle text-primary"></i> Direct
              </span>
              <span class="mr-2">
                <i class="fas fa-circle text-success"></i> Social
              </span>
              <span class="mr-2">
                <i class="fas fa-circle text-info"></i> Referral
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Area;
