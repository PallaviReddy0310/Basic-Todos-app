import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import "bootstrap/js/src/collapse.js";

function NavigationBar() {
  // if link is active
  let activeLink={
    color:'#2b12a4',
    fontSize:'1.6rem',
    fontWeight:'bold',
    fontFamily:'georgia'
  }

  //if link is inactive
  let inactiveLink={
    color:'black'
  }

  return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light p-0">
    <img id='img' src='https://img.freepik.com/free-vector/people-making-list-illustration_53876-64623.jpg?size=626&ext=jpg&ga=GA1.2.1363277684.1672145996&semt=sph' width='100px' height='80px' />
    <button data-bs-target="#menu" data-bs-toggle="collapse" className="navbar-toggler">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="menu">
      <ul className="navbar-nav mx-auto fs-4 nav-tabs">
      <li className="nav-item">
          <NavLink className="nav-link" to='/' style={({isActive})=>{
            return isActive? activeLink:inactiveLink;
          }}>Today</NavLink>
        </li>
        <li className="nav-item mx-5">
          <NavLink className="nav-link" to="/analytics"  style={({isActive})=>{
            return isActive? activeLink:inactiveLink;
          }}>Analytics</NavLink>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default NavigationBar;