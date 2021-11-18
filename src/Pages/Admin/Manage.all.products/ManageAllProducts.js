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
import AOS from "aos";
import "aos/dist/aos.css";

const ManageAllProducts = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://sheltered-meadow-91214.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  const handleDelete = (id) => {
    const url = `https://sheltered-meadow-91214.herokuapp.com/products/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("Are You sure you want to delete");
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        }
      });
    console.log("clicked");
  };

  return (
    <Container>
      <Typography
        data-aos="zoom-in-up"
        sx={{ margin: 4 }}
        gutterBottom
        variant="h4"
        component="div"
      >
        Manage All Products
      </Typography>
      <Grid container spacing={1}>
        <br />
        {products.map((product) => (
          <Grid item xs={12} sm={12} md={4}>
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
                <Button
                  onClick={() => handleDelete(product._id)}
                  sx={{ marginLeft: 12, backgroundColor: "#39395f" }}
                  variant="contained"
                  size="small"
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ManageAllProducts;
