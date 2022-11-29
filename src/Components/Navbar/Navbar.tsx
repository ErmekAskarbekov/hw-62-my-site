import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand">Serviceovo</span>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/FastFoodService" className="nav-link">
                        Fast Food Service
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/RestCountries" className="nav-link">
                        Country Info Service
                    </NavLink>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;