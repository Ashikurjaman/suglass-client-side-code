import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box  sx={{ flexGrow: 1, marginTop: 20, backgroundColor: "#F8F9FA"}}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <p>
            <Link style={{color:"#39395f" , textDecoration: "none"}} class="navbar-item" to="/about">
             About Us
            </Link>
          </p>
          <p>
            <Link class="navbar-item"style={{color:"#39395f" , textDecoration: "none"}} to="/contact">
              Contact Us
            </Link>
          </p>

          <p>
            <Link class="navbar-item"style={{color:"#39395f" , textDecoration: "none"}} to="/adminitator">
              Administrators
            </Link>
          </p>
          <p>
            <Link class="navbar-item"style={{color:"#39395f" , textDecoration: "none"}} to="/trems">
            TERMS & CONDITIONS
            </Link>
          </p>
        </Grid>
        <Grid item xs={6} md={3}>
          <p>
            <Link class="navbar-item"style={{color:"#39395f" , textDecoration: "none"}} to="/privacypolicy">
            PRIVACY POLICY
            </Link>
          </p>
          <p>
            <Link class="navbar-item"style={{color:"#39395f" , textDecoration: "none"}} to="/return">
            RETURN & EXCHANGE
            </Link>
          </p>

          <p>
            <Link class="navbar-item"style={{color:"#39395f" , textDecoration: "none"}} to="/blog">
            BLOG
            </Link>
          </p>
          <p>
            <Link class="navbar-item"style={{color:"#39395f" , textDecoration: "none"}} to="/help">
              Help
            </Link>
          </p>
        </Grid>
        <Grid item xs={6} md={3}>
            <p>Payment Options</p>
          <p>
          <i class="fab fa-paypal"> Paypal</i>
          </p>
          <p>
          <i class="fab fa-cc-visa"> Visa</i>
          </p>
          <p>
          <i class="fab fa-cc-mastercard"> Mastercard</i>
          </p>
          <p>
            
          </p>
        </Grid>
        <Grid item xs={6} md={3}>
          <p>
            <i class="fab fa-instagram"> Instragram</i>
          </p>
          <p>
            <i class="fab fa-facebook"> Facebook</i>
          </p>
          <p>
            <i class="fab fa-twitter"> Twitter</i>
          </p>
          <p>
            <i class="fab fa-youtube"> YouTube</i>
          </p>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
