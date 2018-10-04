import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        <span className='text-danger font-weight-bold'>User</span> Manager
      </a>

      <ul className="navbar-nav d-inline">
        <li className="d-inline-block pl-4">
          <Link to="/" className="text-light">
            <i className="fas fa-home text-light" /> Home
          </Link>
        </li>
        <li className="d-inline-block pl-4">
          <Link to="/about" className="text-light">
            <i className="fas fa-question text-light" /> About
          </Link>
        </li>
        <li className="d-inline-block pl-4">
          <Link to="/adduser" className="text-light">
            <i className="fas fa-plus text-light" /> Add User
          </Link>
        </li>
      </ul>
    </div>
  );
};
