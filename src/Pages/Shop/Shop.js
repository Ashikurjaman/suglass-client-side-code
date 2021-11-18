import React, { useEffect, useState } from 'react';

import { Container, Grid, Typography } from '@mui/material';
import Shopping from './Shopping/Shopping';
import Cart from '../../Component/Cart/Cart,';


// const products = [
//     {
//         id: 1,
//         name: 'Vista Transparent',
//         price:950.00 ,
//         img:"https://lunettes.com.bd/wp-content/uploads/2018/11/Front-32-500x500.jpg",


//     },
//     {
//         id: 2,
//         name: 'Whistler Black',
//         price:800.00 ,
//         img:"https://lunettes.com.bd/wp-content/uploads/2018/12/Whistler-Black-Front-500x500.jpg",


//     },
//     {
//         id: 3,
//         name: 'Cole Black Eyeglasses',
//         price:950.00 ,
//         img:"https://lunettes.com.bd/wp-content/uploads/2019/01/COLE-BLACK-EYEGLASS-2-500x500.jpg",


//     },
//     {
//         id: 4,
//         name: 'Vista Black',
//         price:950.00 ,
//         img:"https://lunettes.com.bd/wp-content/uploads/2018/10/Vista-Black-front-2-500x500.jpg",


//     },
//     {
//         id: 5,
//         name: 'Rocovva Gold Black',
//         price:1350.00 ,
//         img:"https://lunettes.com.bd/wp-content/uploads/2018/09/front_minified-500x500.png",


//     },
//     {
//         id: 6,
//         name: 'Tagger Black',
//         price:800.00 ,
//         img:"https://lunettes.com.bd/wp-content/uploads/2018/11/TAGGER-BLACK-7-500x500.jpg",


//     },
//     {
//         id: 7,
//         name: 'Ironman Red',
//         price:950.00 ,
//         img:"https://lunettes.com.bd/wp-content/uploads/2018/12/Front-34-500x500.jpg",


//     },
//     {
//         id: 8,
//         name: 'Geary Black',
//         price:950 ,
//         img:"https://lunettes.com.bd/wp-content/uploads/2018/11/Front-19-500x500.jpg",


//     },
//     {
//         id: 9,
//         name: 'Evantikk Black',
//         price:950.00 ,
//         img:"https://lunettes.com.bd/wp-content/uploads/2018/05/Evantikk-Black1-500x500.jpg",


//     },
//     {
//         id: 10,
//         name: 'Explora Flip Black',
//         price:950.00 ,
//         img:"https://lunettes.com.bd/wp-content/uploads/2018/05/Front-11-500x500.jpg",


//     },
// ]



const Shop = () => {
    const [products, setProducts] =useState([]);
    const [cart, setCart] = useState({});

    const handalAddtoCart = (product) =>{
        const newCart =[{...cart,product}];
        setCart(newCart);
        // console.log(cart)
    }

    useEffect(() => {
        fetch("http://localhost:5000/products")
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    },[])

    return (
        <Container style={{display: 'flex'}}>
          <div>
          <Typography sx={{margin:4}} gutterBottom variant="h4" component="div">
          Products
        </Typography >
            <Grid data-aos="fade-down" style={{display: 'flex'}} container spacing={1}>
            
        <br/>
            {
                products.map(product =><Shopping
                key={product.id}
                product={product}
                handalAddtoCart={handalAddtoCart}
                
                ></Shopping>)
            }
            
            </Grid>
            
            

          </div>
          
        </Container>
    );
};

export default Shop;