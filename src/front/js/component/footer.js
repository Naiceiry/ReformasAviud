import React, { Component } from "react";
import gmail from "../../img/gmail.png";
import maps from "../../img/maps.png";
import wsapp from "../../img/wsapp.png";
import youtb from "../../img/youtb.png";
import intg from "../../img/intg.png";
export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <a className="navbar-brand" href="mailto:reformasaviud@gmail.com">
      <img className="img-footer" src={gmail} />
    </a>
    <a
      className="navbar-brand"
      href="https://api.whatsapp.com/send?phone=+34651667144"
    >
      <img className="img-footer" src={wsapp} />
    </a>
    <a className="navbar-brand" href="https://goo.gl/maps/ZRNcayEQmWSgEidP9">
      <img className="img-footer" src={maps} />
    </a>
    <a
      className="navbar-brand"
      href="https://www.youtube.com/channel/UChPQF4zFH-Oqf2A-b2cYKqA"
    >
      <img className="img-footer" src={youtb} />
    </a>
    <a className="navbar-brand" href="#">
      <img className="img-footer" src={intg} />
    </a>
  </footer>
);
