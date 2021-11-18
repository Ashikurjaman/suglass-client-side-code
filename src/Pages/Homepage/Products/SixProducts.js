import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SixProducts = () => {
    const [products, setProducts] =useState([])

    useEffect(() => {
        fetch("http://localhost:5000/products")
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    },[])
    return (
        <Container>
            <Typography sx={{margin:4}} gutterBottom variant="h4" component="div">
          Products
        </Typography>
            <Grid container spacing={1}>
            
        <br/>
            {
                products.slice(0,6).map(product =><Grid item xs={12} sm={12} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={product.img}
                alt="green iguana"
              />
              <CardContent>
                <Typography  gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Price: {product.price} Taka
                </Typography>
              </CardContent>
              <CardActions>
                
              <Link sx={{textDecoration: 'none'}} to={`/purchase/${product._id}`}>
<Button  sx={{marginLeft:12, backgroundColor:"#39395f", textDecoration: "none"}} variant="contained" size="small">Add To Cart</Button>

</Link> 
              </CardActions>
            </Card>
                </Grid>)
            }
            </Grid>

        </Container>
    );
};

export default SixProducts;