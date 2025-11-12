import React from "react";
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Brand */}
        <span className="navbar-brand">General Store</span>

        {/* Toggler button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="nav-link btn-link" aria-current="page">
                Home
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn-link">
                About
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn-link">
                Location
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn-link">
                Contact
              </button>
            </li>
          </ul>

          {/* Optional: Login button on right */}
          <div className="d-flex">
            <button className="btn btn-outline-light">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;