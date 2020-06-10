import React from "react";
import "../styleSheets/Dashboard.css";

export default () => (
  <div className="dashboard-wrapper">
    <div className="dashboard-left">
      <div className="dashboard-left-title">
        <h6>Renew It</h6>
      </div>
      <hr></hr>
      <div className="dashboard-left-body">
        <ul>
          <li>
          <i class="fas fa-chart-pie"> Dashboard</i>
          </li>
          <li>
            <i></i>
          </li>
          <li>
            <i></i>
          </li>
          <li>
            <i></i>
          </li>
          <li>
            <i></i>
          </li>
        </ul>
      </div>
    </div>
    <div className="dashboard-right">Right Part</div>
  </div>
);
