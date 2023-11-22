// Dashboard.js

import React, { useState } from 'react';
import { FaHome, FaCalendar, FaUsers, FaPhoneAlt, FaCogs } from 'react-icons/fa';
import './Sidebar.css';
import "./Dashboard.js"
import Dashboard from './Dashboard.js';
const Sidbar = () => {
  const [isBarExpanded, setBarExpanded] = useState(false);

  const expandBar = () => {
    setBarExpanded(!isBarExpanded);
  };

  return (
    <div>
    <div className={`bar ${isBarExpanded ? 'barexpanded' : ''}`}>
      <i className="fas fa-align-left toggle" onClick={expandBar}></i>

      <ul className="tools">
        <li>
          <FaHome className="react-icon" />
          <div className="nombre">Dashboard</div>
        </li>
        <li>
          <FaCalendar className="react-icon" />
          <div className="nombre">Calendar</div>
        </li>
        <li>
          <FaUsers className="react-icon" />
          <div className="nombre">Clients</div>
        </li>
        <li>
          <FaPhoneAlt className="react-icon" />
          <div className="nombre">Calls</div>
        </li>
        <li>
          <FaCogs className="react-icon" />
          <div className="nombre">Settings</div>
        </li>
      </ul>
      
    </div>
    <div className='dashboard'>
        <Dashboard />
      </div>
    </div>
  );
};

export default Sidbar;





