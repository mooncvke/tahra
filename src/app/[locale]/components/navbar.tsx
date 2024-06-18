import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const imgPath = "/LOGO.png";

const NavBar = ({ toggle, isOpen }: { toggle: any; isOpen: boolean }) => {
  return (
    <div className={`navbar navbar-expand-md  ${isOpen ? "open" : ""}`}>
      <Link className="navbar-logo" href="/">
        <img className="logo" src={imgPath} alt="TAHRA logo" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <Link className="link" href="/about">
              TIETOA
            </Link>
          </li>{" "}
          <li className="navbar-item">
            <Link className="link" href="/events">
              TAPAHTUMAT
            </Link>
          </li>{" "}
          <li className="navbar-item">
            <Link className="link" href="/member">
              JÄSENEKSI
            </Link>
          </li>{" "}
          <li className="navbar-item">
            <Link className="link" href="/contacts">
              YHTEYSTIEDOT
            </Link>
          </li>
          <li>
            <Link className="link" href="/gallery">
              GALLERIA
            </Link>
          </li>
          <li>
            {" "}
            <div className="languages">
              <a>FI</a>
              <a>EN</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
