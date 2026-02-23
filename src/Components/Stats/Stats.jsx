import React from "react";
import "./stats.css";

function StatItem({ number, label }) {
  return (
    <div className="col-md-3 col-6 text-center mb-4">
      <div className="stat-circle">
        <h2 className="mb-0">{number}</h2>
        <p className="mb-0">{label}</p>
      </div>
    </div>
  );
}

function Stats() {
  return (
    <div className="stats-section d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">

          <StatItem number="450+" label="City Covered" />
          <StatItem number="48+" label="Designation" />
          <StatItem number="5000+" label="Jobs Posted" />
          <StatItem number="98%" label="Customer Satisfaction" />

        </div>
      </div>
    </div>
  );
}

export default Stats;