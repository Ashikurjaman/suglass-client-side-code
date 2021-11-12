import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div>
            <h2>404 Page Not Found</h2>
            <Link style={{backgroundColor:"#39395f", textDecoration:"none"  }} to="/"><Button  variant="contained">Back To HomePage</Button></Link>
        </div>
    );
};

export default Notfound;