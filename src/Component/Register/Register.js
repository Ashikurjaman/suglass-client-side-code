import { Button, AlertTitle, Alert ,CircularProgress, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { NavLink,useHistory } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth/useAuth";


const Register = () => {
    const {user,registerUser, isLoading, error} = useAuth()
    const [loginData, setLoginData] = useState({})
    const history = useHistory()

  const handalOnBlur = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = {...loginData}
      newLoginData[field] = value;
      console.log(newLoginData);
      setLoginData(newLoginData);
      console.log(newLoginData);
  };
  const handaleLoginSubmit = e => {
    if(loginData.password !==  loginData.password2){
        alert('Your Password is incorrect');
        return
    }
    registerUser(loginData.email,loginData.password,history,loginData.name);
    e.preventDefault();
  };
    return (
        <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 20 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Register
          </Typography>
          { !isLoading && <form onSubmit={handaleLoginSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="name"
              label="Your Name"
              name="name"
              onBlur={handalOnBlur}
              variant="standard"
              
            ></TextField>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="email"
              label="Your Email"
              name="email"
              onBlur={handalOnBlur}
              variant="standard"
              type="email"
            ></TextField>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="password"
              type="password"
              name="password"
              onBlur={handalOnBlur}
              label="Your Password"
              variant="standard"
            ></TextField>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="password2"
              type="password"
              name="password2"
              onBlur={handalOnBlur}
              label="Re-Type Password"
              variant="standard"
            ></TextField>
            <NavLink 
            style={{textDecoration: "none"}}
            to="/login">
            <Button variant="text">Already Register? Please Login</Button>
            </NavLink>
            <Button
              sx={{ width: "75%", mt: 3 }}
              type="submit"
              variant="contained"
            >
              Register
            </Button>
            {isLoading && <CircularProgress />}
          <br/>
          {user.email && <Alert severity="success">
  <AlertTitle>Successfully Register</AlertTitle>
  User Created — <strong>Successfully!</strong>
</Alert>}
          </form>}
          
{
  error && <Alert severity="error">
  <AlertTitle>Error</AlertTitle>
  {error}
</Alert>
}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src="https://lunettes.com.bd/wp-content/uploads/2021/04/alonso-vila-ulloa-CSDOMK9xy6g-unsplash.jpg" alt="" />
        </Grid>
      </Grid>
    </Container>
    );
};

export default Register;