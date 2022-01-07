// imports 
import React from "react";
import {Link} from "react-router-dom";

export default class Nav extends React.Component {
  render() {    
    return (
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="Nav container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <Link to="/"> Home </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link to="/market"> Market </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link to="/create"> Create </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link to="/about"> About </Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}