import React from 'react'
import {} from "./Navbar.css" 
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <h1>Raymond</h1>
        <ul>
          <Link to="/" >Home</Link>
          <Link to="/users" >User</Link>
          <Link to="/about" >About</Link>
          <Link to="/contact" >Contact</Link>
        </ul>
    </nav>
  )
}

export default Navbar