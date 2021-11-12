import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

const MenAndWomenBanner = () => {
    return (
        <Box sx={{ flexGrow: 1 , marginTop: 7 }}>
      <Grid container spacing={3}>
        <Grid  item xs={12} md={6}>
          <h2>A PAIR FOR HER</h2>
          <br/>
          <img style={{width: '75%', padding: '2', marginBottom:"30px"}} src="https://lunettes.com.bd/wp-content/uploads/2021/05/Female-Model-tinified.jpg" alt="" />
          <br/>
         <Container style={{textAlign: "left"}}>
         <h4>Put on the right sunglasses and conquer the world</h4>
          <p>Sunglasses might be a small accessory, but they have a large impact. A great pair can elevate your outfit and your style, but our sunglasses for women can boost your mood too.</p>
         </Container>
        </Grid>
        <Grid  item xs={12} md={6}>
          <h2>A PAIR FOR HIM</h2>
          <br/>
          <img style={{width: '75%', padding:"2", marginBottom:"30px"}} src="https://lunettes.com.bd/wp-content/uploads/2021/05/ironman-red-model-photo-2021-a-resized-tinified.png" alt="" />
          <br/>
          <Container style={{textAlign: "left"}}>
          <h4>Look hot with cool sunglasses</h4>
          <p>No matter your taste, no matter your budget, no matter how often you lose your damn sunglasses in the back of a Lyft, we’ve got you covered with a wide range of trendy and fashionable shades.</p>
          </Container>
        </Grid>
        
      </Grid>
    </Box>
    );
};

export default MenAndWomenBanner;