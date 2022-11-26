import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light bg-light py-3">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4 " to="/" end>
                        Store Online
                    </NavLink>
                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">

                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/" end>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products" end>Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about" end>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact" end>Contact</NavLink>
                            </li>

                        </ul>
                        <div className="buttons">
                            <NavLink to="/create" className="btn btn-outline-dark">
                                <i className="fa fa-plus-square-o me-1"></i> Create</NavLink>
                            <NavLink to="/cart" className="btn btn-outline-dark ms-3">
                                <i className="fa fa-shopping-cart me-1"></i> Cart (0)</NavLink>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;