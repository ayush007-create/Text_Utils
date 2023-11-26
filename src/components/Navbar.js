import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-${props.mode}`}
      id="navi"
    >
      <div className="container-fluid">
        <a className="navbar-brand anchor" style={{color:props.mode==='light'?'black':'white'}} href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" style={{color:props.mode==='light'?'black':'white'}} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{color:props.mode==='light'?'black':'white'}} to="/about">
                {props.abouttext}
              </Link>
            </li>
          </ul>
          <div id="colorpallete">
          <i className="bi bi-circle-fill"  onClick={props.greencolor} style={{color : 'green'}}></i>
          </div>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-3`}>
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  abouttext: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "set title here",
  abouttext: "write about us",
};
