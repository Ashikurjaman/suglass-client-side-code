import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Button } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect( () => {
    AOS.init();
  },[])
    return (
        <div data-aos="zoom-in" className="container">
            <h2>GET IN TOUCH</h2>
            <br/>
            <p>Having an issue or confused about anything regarding our product or service? Don’t worry. You can just contact by filling out the contact form below or call our customer service number(+880 1795-000000).</p>

            <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
        data-aos="zoom-in"
          required
          id="outlined-required"
          label="Name"
          defaultValue=""
          style={{ width: 700,  }}
        />
        <br/>
        <TextField
        data-aos="zoom-in"
          required
          id="outlined-required"
          label="Email"
          defaultValue=""
          style={{ width: 700,  }}
        />
        <br/>
        <TextField
        data-aos="zoom-in"
          required
          id="outlined-required"
          label="Issue"
          defaultValue=""
          style={{ width: 700,  }}
        />
        <br/>

<TextareaAutosize
      aria-label="empty textarea"
      placeholder="Your massage"
      style={{ width: 700, height: 200 }}
    />
    <br/>

    <Button data-aos="zoom-in" style={{ marginTop:"20px", backgroundColor:"#39395f"  }} variant="contained">Send</Button>
            
        </div>
        </Box>
        </div>
    );
};

export default Contact;