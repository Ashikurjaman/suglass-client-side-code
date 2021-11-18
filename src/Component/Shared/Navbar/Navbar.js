import { Box } from "@mui/system";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/UseAuth/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            LUNETTES
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ms-2">
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#416a59",
                  }}
                  className="ms-4 text-decoration-none"
                  style={{ color: "#39395f" }}
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#416a59",
                  }}
                  className="ms-4 text-decoration-none"
                  style={{ color: "#39395f" }}
                  to="/shop"
                >
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#416a59",
                  }}
                  className="ms-4 text-decoration-none"
                  style={{ color: "#39395f" }}
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#416a59",
                  }}
                  className="ms-4 text-decoration-none"
                  style={{ color: "#39395f" }}
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="d-flex">
              {user?.email ? (
                <Box>
                  <Link to="/dashboard">
                    <button
                      style={{
                        backgroundColor: "#39395f",
                        color: "#fff",
                        marginRight: "10px",
                      }}
                      className="btn "
                    >
                      DashBoard
                    </button>
                  </Link>
                  <Link to="/login">
                    <button
                      onClick={logout}
                      style={{ backgroundColor: "#39395f", color: "#fff" }}
                      className="btn "
                    >
                      Logout
                    </button>
                  </Link>
                </Box>
              ) : (
                <Link to="/login">
                  <button
                    style={{ backgroundColor: "#39395f", color: "#fff" }}
                    className="btn "
                  >
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
