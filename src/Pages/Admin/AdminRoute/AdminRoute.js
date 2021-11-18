import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import useAuth from '../../../Hooks/UseAuth/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const {user,isLoading, admin} = useAuth()
    if(isLoading) {
        return <CircularProgress></CircularProgress>
    }
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default AdminRoute;