import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="complete-nav">
            <nav className="navbar navbar-expand-lg bg-white py-0">
  <div className="container">
    <Link className="navbar-brand" to="/"><img src="/logo.webp" alt="logo" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
      <span className="navbar-toggler-icon">div</span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link nav_links px-4" to="/">Home</Link>
        <Link className="nav-link nav_links px-4" to="/onlinecourses">Online Courses</Link>
        <Link className="nav-link nav_links px-4" to="/we-are-hiring">We're Hiring</Link>
        <Link className="nav-link nav_links px-4" to="/more">More</Link>
        
      </div>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
