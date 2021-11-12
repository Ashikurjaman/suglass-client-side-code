import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">LUNETTES</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item ms-2">
        <NavLink activeStyle={{
    fontWeight: "bold",
    color: "#416a59"
  }} className="ms-4 text-decoration-none"  to="/">Home</NavLink>
        </li>
        <li class="nav-item">
        <NavLink activeStyle={{
    fontWeight: "bold",
    color: "#416a59"
  }} className="ms-4 text-decoration-none"  style={{color:"#39395f"}} to="/shop">Shop</NavLink>

        </li>
        <li class="nav-item">
         <NavLink activeStyle={{
    fontWeight: "bold",
    color: "#416a59"
  }} className="ms-4 text-decoration-none" style={{color:"#39395f"}}  to="/about">About Us</NavLink>


        </li>
        <li class="nav-item">
         <NavLink activeStyle={{
    fontWeight: "bold",
    color: "#416a59"
  }} className="ms-4 text-decoration-none" style={{color:"#39395f"}}  to="/contact">Contact Us</NavLink>


        </li>
        
        
      </ul>
      <div class="d-flex">
        
        <button style={{  backgroundColor:"#39395f" , color:"#fff" }} class="btn " >Login</button>
      </div>
    </div>
  </div>
</nav>
    </div>
  );
};

export default Navbar;