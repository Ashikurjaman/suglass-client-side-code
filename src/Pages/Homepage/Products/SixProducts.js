import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const SixProducts = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <Container>
      <Typography sx={{ margin: 4 }} gutterBottom variant="h4" component="div">
        Products
      </Typography>
      <Grid container spacing={1}>
        <br />
        {products.slice(0, 6).map((product) => (
          <Grid key={product.id} item xs={12} sm={12} md={4}>
            <Card data-aos="zoom-in-up" sx={{ maxWidth: 345 }}>
              <CardMedia
                data-aos="zoom-in-up"
                component="img"
                height="140"
                image={product.img}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  data-aos="zoom-in-up"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {product.name}
                </Typography>
                <Typography
                  data-aos="zoom-in-up"
                  variant="h6"
                  color="text.secondary"
                >
                  Price: {product.price} Taka
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  data-aos="zoom-in-up"
                  sx={{ textDecoration: "none", underline: "none" }}
                  to={`/purchase/${product._id}`}
                >
                  <Button
                    data-aos="zoom-in-up"
                    sx={{
                      marginLeft: 12,
                      backgroundColor: "#39395f",
                    }}
                    variant="contained"
                    size="small"
                  >
                    Add To Cart
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SixProducts;
