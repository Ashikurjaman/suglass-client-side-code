import React, { useEffect, useState } from "react";

import { Container, Grid, Typography } from "@mui/material";
import Shopping from "./Shopping/Shopping";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const handalAddtoCart = (product) => {
    const newCart = [{ ...cart, product }];
    setCart(newCart);
    // console.log(cart)
  };

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <Container style={{ display: "flex" }}>
      <div>
        <Typography
          sx={{ margin: 4 }}
          gutterBottom
          variant="h4"
          component="div"
        >
          Products
        </Typography>
        <Grid
          data-aos="fade-down"
          style={{ display: "flex" }}
          container
          spacing={1}
        >
          <br />
          {products.map((product) => (
            <Shopping
              key={product.id}
              product={product}
              handalAddtoCart={handalAddtoCart}
            ></Shopping>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default Shop;
