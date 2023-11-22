// Dashboard.js

import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import './Dashboard.css';

const Dashboard = () => {
  // Dummy data for graphs
  const revenueData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Revenue',
        data: [100, 150, 200, 120, 180],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const affiliatesData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Affiliates',
        data: [50, 80, 120, 90, 110],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const otherGraphData = {
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [
      {
        label: 'Other Graph',
        data: [10, 30, 50, 20, 40],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboard">
      <div className="graph-container">
        {/* Revenue Graph */}
        <div className="graph">
          <h3>Revenue Graph</h3>
          <Line data={revenueData} />
        </div>

        {/* Affiliates Graph */}
        <div className="graph">
          <h3>Affiliates Graph</h3>
          <Bar data={affiliatesData} />
        </div>

        {/* Other Graph */}
     
      </div>
    </div>
  );
};

export default Dashboard;
