import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/circularlogo.jpg";
import { Aboutus } from "./aboutus.js";
import { Budget } from "./budget.js";
import { Workdone } from "./workdone.js";
import { Reviews } from "./reviews.js";
export const Navbar = () => {
  return (
    <nav className="navbar_blue navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid ">
        <div className="col-2">
          <Link to="/home">
            <img className="logo-navb" src={logo} />
          </Link>
        </div>
        <div className="menu-navbar col-10">
          <div className="button-navbar ">
            <button
              className=" navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon bg-light "></span>
            </button>
          </div>
          <div
            className="listanav ul-nav collapse navbar-collapse"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/home">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link to="/workdone">Trabajos Realizados</Link>
              </li>
              <li className="nav-item">
                <Link to="/budget">Presupuesto</Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Otros
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link to="/contact">Contactenos</Link>
                  </li>
                  <li>
                    <Link to="/reviews">Opiniones de clientes</Link>
                  </li>
                  <li>
                    <Link to="/aboutus">Nosotros</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
