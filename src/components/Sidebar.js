import React from 'react'
import {Link} from 'react-router-dom';

function Sidebar() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark" style={{ width: '280px', height: '100vh' }}>
      <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-light text-decoration-none">
        <span className="fs-4">The Blog</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">
          Dashboard
          </Link>
        </li>
        <li>
          <Link to="/post" className="nav-link link-light">
            Posts
          </Link>
        </li>
        <li>
          <Link to="#" className="nav-link link-light">
            Comments
          </Link>
        </li>
        <li>
          <Link to="#" className="nav-link link-light">
            Users
          </Link>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <Link to="#" className="d-flex align-items-center link-light text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://via.placeholder.com/32" alt="" className="rounded-circle me-2" />
          <strong>User</strong>
        </Link>
        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser1">
          <li><Link className="dropdown-item" to="#">Profile</Link></li>
          <li><Link className="dropdown-item" to="#">Settings</Link></li>
          <li><hr className="dropdown-divider" /></li>
          <li><Link className="dropdown-item" to="#">Sign out</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar