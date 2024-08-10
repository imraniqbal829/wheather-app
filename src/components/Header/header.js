// src/components/Header.js

import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo d-flex align-items-center">
          <span className="fs-3 fw-bold">WheaterToday.</span>
        </div>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <a href="#!" className="nav-link text-white">Lorem</a>
            </li>
            <li className="nav-item">
              <a href="#!" className="nav-link text-white">Ipsum</a>
            </li>
            <li className="nav-item">
              <a href="#!" className="nav-link text-white">Dolor</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
