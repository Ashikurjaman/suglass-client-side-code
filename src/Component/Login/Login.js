// import { Button,CircularProgress,Alert,AlertTitle,   TextField,  } from "@mui/material";
import React, { useState } from 'react';
import { useHistory, useLocation,NavLink } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth/useAuth";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import TextField from '@mui/material/TextField';

const Login = () => {
    const {user, loginUser, isLoading,error,googleSignIn} = useAuth();
    const [loginData, setLoginData] = useState({})
    const location = useLocation();
    const history = useHistory();
    
    
    const googleHandlerSignIn = () => {
      googleSignIn(location,history)
    }
    
      const handalOnchange = (e) => {
          const field = e.target.name;
          const value = e.target.value;
          const newLoginData = {...loginData}
          newLoginData[field] = value;
          setLoginData(newLoginData);
      };
      const handaleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
      };
    return (
        <Container>
        <Grid container spacing={2}>
          <Grid item sx={{ mt: 20 }} xs={12} md={6}>
            <Typography variant="body1" gutterBottom>
              Login
            </Typography>
            <form onSubmit={handaleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                name="email"
                onChange={handalOnchange}
                variant="standard"
              ></TextField>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                type="password"
                name="password"
                onChange={handalOnchange}
                label="Your Password"
                variant="standard"
              ></TextField>
              <NavLink 
              style={{textDecoration: "none"}}
              to="register">
              <Button variant="text">New User? Please Register</Button>
              </NavLink>
              <Button
                sx={{ width: "75%", mt: 3 }}
                type="submit"
                variant="contained"
              >
                Log In
              </Button>
              <br/>
              <br/>
              <br/>
              <br/>
  
  
              {isLoading && <CircularProgress />}
            <br/>
            {user.email && <Alert severity="success">
    <AlertTitle>Successfully Login</AlertTitle>
    
  </Alert>}
  {
    error && <Alert severity="error">
    <AlertTitle>Error</AlertTitle>
     <strong>{error}</strong>
  </Alert>
  }
            </form>
            <p>---------------------</p>
          <Button 
          onClick={googleHandlerSignIn}
              sx={{  mt: 3 }}
              type="submit"
              variant="contained"
            >
              Google Sign In
            </Button>
  
  
            
          </Grid>
          <Grid item xs={12} md={6}>
            <img style={{ width: "100%" }} src="https://lunettes.com.bd/wp-content/uploads/2021/04/alonso-vila-ulloa-CSDOMK9xy6g-unsplash.jpg" alt="" />
          </Grid>
        </Grid>
      </Container>
    );
};

export default Login;