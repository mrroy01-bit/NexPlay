import React from 'react';
import "../Style/Navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="leftSide">
        <h1 className="logo">NexPlay</h1>
      </div>
      
      <div className="searchBar">
        <input 
          type="text" 
          className="searchInput" 
          placeholder="Search"
        />
        <button className="searchButton">
          Search
        </button>
      </div>

      <div className="rightSide">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#login" className="loginButton">Login</a>
      </div>
    </div>
  );
}

export default NavBar;