import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';

export default function Navbar() {
    const theme = useTheme();
  const useStyles = makeStyles({
    navitems: {
      color: 'white',
      textDecoration: 'none',
      marginLeft: 30,
    },
    navicon: {
      [theme.breakpoints.up('sm')]: {
        display: 'none !',
      }
    },
    navitemContainer: {
      [theme.breakpoints.up('sm')]: {
        display: 'none !',
      }
    }
  })

  const {navitems,navicon,navitemContainer} = useStyles()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            className={navicon}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Box className={navitemContainer}>
              <Link className={navitems} to="/">Home</Link>
              <Link className={navitems} to="/shop">Shop</Link>
              <Link className={navitems} to="/about">About Us</Link>
              <Link className={navitems} to="/contact">Contact Us</Link>
          </Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
