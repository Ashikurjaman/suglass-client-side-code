import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography
            data-aos="zoom-in-up"
            style={{ textAlign: "center", marginTop: "60px" }}
            variant="h3"
          >
            A BROAD RANGE OF
            <br />
            TRENDY EYEWEAR
          </Typography>
          <Typography
            data-aos="zoom-in-up"
            sx={{ color: "gray", fontSize: "16px" }}
            variant="text"
          >
            Perfect look with a suitable pair of glasses. Put on eyewear & put
            on positive view mode.
          </Typography>
          <br />
          <br />
          <br />
          <Link
            data-aos="zoom-in-up"
            className="text-decoration-none"
            to="/shop"
          >
            <Button
              data-aos="zoom-in-up"
              style={{ backgroundColor: "#39395f" }}
              variant="contained"
            >
              Shop Now
            </Button>
          </Link>
        </Grid>
        <Grid data-aos="zoom-in-up" item xs={12} md={6}>
          <img
            data-aos="zoom-in-up"
            style={{ width: "100%" }}
            src="https://lunettes.com.bd/wp-content/uploads/2021/04/stephanie-hau-P4TPjOXKqY8-unsplash.jpg"
            alt=""
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
