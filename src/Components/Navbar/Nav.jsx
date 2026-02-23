import React from "react";
import './Nav.css';

const Nav = () => {
    return(
     <div>

      {/* Top Bar */}
      <div className="top-bar">
        <div className="container d-flex justify-content-between">
          <span>Post and Search Pharma Jobs Here</span>
          <span>contact@indianpharmajobs.com | +91 88474 62969 | Register | Login</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary">
            INDIAN <span className="text-warning">PHARMAJOBS</span>
          </a>

          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active-link">Home</a></li>
              <li className="nav-item"><a className="nav-link">About Us</a></li>
              <li className="nav-item"><a className="nav-link">Post Job</a></li>
              <li className="nav-item"><a className="nav-link">FAQs</a></li>
              <li className="nav-item"><a className="nav-link">Contact Us</a></li>
              <li className="nav-item"><a className="nav-link">WhatsApp Group</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="container">
          <div className="row g-4 justify-content-center">

            <div className="col-md-3">
              <div className="card text-center hero-card">
                <div className="card-body">
                  <h5>I am a Candidate</h5>
                  <p>To Search Jobs</p>
                  <button className="btn btn-warning">Click here</button>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card text-center hero-card">
                <div className="card-body">
                  <h5>I am an Employer</h5>
                  <p>Post Jobs for Free</p>
                  <button className="btn btn-warning">Click here</button>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card text-center hero-card">
                <div className="card-body">
                  <h5>My Account</h5>
                  <p>Manage and update your profile</p>
                  <button className="btn btn-warning">Click here</button>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card text-center hero-card">
                <div className="card-body">
                  <h5>My Resume</h5>
                  <p>Submit your Profile</p>
                  <button className="btn btn-warning">Click here</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>

    
    )
}

export default Nav;