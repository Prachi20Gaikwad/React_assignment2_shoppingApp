import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


const Navbar = (props) => {
    const state = useSelector((state) => state.handleCart)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">
                        LA COLLECTION
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
                    <div className="collapse navbar-collapse"
                        id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active"
                                    aria-current="page"
                                    to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"
                                    to="/products">
                                    Products
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link"
                                    to="/about">
                                    About
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link"
                                    to="/contact">
                                    Contact
                                </NavLink>
                            </li>


                        </ul>
                        <div className="buttons">
                            {/* <button
                                style={{
                                    cursor: "pointer",
                                    font: "inherit",
                                    border: "none",
                                    backgroundColor: "#015a53",
                                    color: "white",
                                    padding: "0.75rem 3rem",
                                    display: "flex",
                                    justifyContent: "space-around",
                                    alignItems: "center",
                                    borderRadius: "25px",
                                    fontWeight: "bold",
                                }}
                                onClick={(e) => props.handleSignOut(e)}
                            >
                                {" "}
                                Sign Out
                            </button> */}
                            <NavLink to="/login" className="btn btn-outline-dark" onClick={(e) => props.handleSignOut(e)}>
                                <i className="fa fa-sign-in me-1"></i>Logout
                            </NavLink>
                            <NavLink to="/register" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-user-plus me-1"></i>Register
                            </NavLink>
                            <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                                <span className="fa fa-shopping-cart me-1"></span>
                                Cart ({state.length})
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav >
        </div >

    );
}

export default Navbar;