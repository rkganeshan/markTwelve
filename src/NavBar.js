import React from "react";
import Link from "react-router-dom";

const NavBar = () => (
  <div className="NavBar">
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Calc Triangle
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse mt-3" id="navbarText">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/istriangle">
              IsTriangle <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item active">
            <a className="nav-link" href="/quiz">
              Quiz <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item active">
            <a className="nav-link" href="/hypotenuse">
              Hypotenuse <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item active">
            <a className="nav-link" href="/area">
              Area <span class="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default NavBar;
