import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
              <Link to="/">
                  <div className="nav_logo">
                      Ground <span>T</span>
                  </div>
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                      data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                      aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                      <li className="nav-item">
                          <Link to="/menu1">
                              <a className="nav-link active" aria-current="page" href="#">menu1</a>
                          </Link>
                      </li>
                      <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                             aria-expanded="false">
                              Dropdown link
                          </a>
                          <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Action</a></li>
                              <li><a className="dropdown-item" href="#">Another action</a></li>
                              <li><a className="dropdown-item" href="#">Something else here</a></li>
                          </ul>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  );
};

export default Navigation;
