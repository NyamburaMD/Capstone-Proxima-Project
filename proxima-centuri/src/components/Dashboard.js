import React from "react";

const Dashboard = () => {
    return (
      <div className="grid">
      <div className="card">
        <h2>Total Savings</h2>
        <p>KES 0.00</p>
      </div>
      <div className="card">
        <h2>Pending Loans</h2>
        <p>None</p>
      </div>
    </div>
    );
};

export default Dashboard;