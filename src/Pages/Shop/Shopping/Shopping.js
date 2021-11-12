import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const Shopping = ({product}) => {
    const {name, price, img} = product;
    return (
        <Grid item xs={12} sm={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography  gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Price: {price} Taka
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button sx={{marginLeft:12, backgroundColor:"#39395f"}} variant="contained" size="small">Add To Cart</Button>
      </CardActions>
    </Card>
        </Grid>
    );
};

export default Shopping;