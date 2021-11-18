import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';




const Shopping = ({product}) => {
  useEffect( () => {
    AOS.init();
  },[])
    const {name, price, img,_id} = product;
    
    return (
        <Grid item xs={12} sm={12} md={4}>
            <Card  data-aos="fade-up"
     data-aos-duration="3000" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt="green iguana"
      />
      <CardContent data-aos="fade-down">
        <Typography  gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Price: {price} Taka
        </Typography>
      </CardContent>
      <CardActions>
        
<Link sx={{textDecoration: 'none'}} to={`/purchase/${_id}`}>
<Button  sx={{marginLeft:12, backgroundColor:"#39395f", textDecoration: "none"}} variant="contained" size="small">Add To Cart</Button>

</Link>     
 </CardActions>
    </Card>
        </Grid>
    );
};

export default Shopping;