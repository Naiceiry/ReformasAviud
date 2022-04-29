import React, { Component } from "react";
import gmail from "../../img/gmail.jpg";
import wsapp from "../../img/wsapp.jpg";
export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <a className="navbar-brand" href="#">
      <img className="img-footer" src={gmail} />
    </a>
    <a className="navbar-brand" href="#">
      <img className="img-footer" src={wsapp} />
    </a>
  </footer>
);
