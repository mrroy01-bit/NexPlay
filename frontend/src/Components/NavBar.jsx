import React from 'react'
import "../Style/Navbar.css"
const NavBar = () => {
  return (
    <>
    <div className="navbar">
        <div className="leftSide">
            <h1>NexPlay</h1>
        </div>
        <div className="rightSide">
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Contact</h1>
            <h1>Login</h1>
        </div>
    </div>
    </>
  )
}

export default NavBar