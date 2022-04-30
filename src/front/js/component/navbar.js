import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/circularlogo.jpg";

export const Navbar = () => {
  return (
    <nav className="navbar_blue navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid ">
        <div className="col-2">
          <a className="navbar-brand" href="#">
            <img className="logo-navb" src={logo} />
          </a>
        </div>
        <div className="menu-navbar col-10">
          <div className="button-navbar ">
            <button
              className="navbar-toggler"
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
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Trabajos Realizados
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Presupuesto
                </a>
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
                    <a className="dropdown-item" href="#">
                      Contactenos
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Recomendaciones
                    </a>
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
