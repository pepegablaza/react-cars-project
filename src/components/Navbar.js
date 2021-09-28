import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container container-nav">
        <div className="site-title">
          <h1>Cars App </h1>
          <p className="subtitle">Cars App with React and MobX</p>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/searchCars">Cars</Link>
            </li>
            <li>
              <Link to="/searchBrands">Brands</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
