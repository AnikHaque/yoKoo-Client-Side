import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bg from '../../../images/aboutBanner.jpg';
import { Typography } from '@mui/material';
import { fontSize } from '@mui/system';

const bannerBg={
    background:`url(${bg})`,
     backgroundPosition:'center',
    backgroundSize:'cover',
    height:'80vh'
}
const bannerText={
    fontSize:'125px',
    marginTop:'150px',
    color:'white',
    fontWeight:'bolder',
    textAlign:'center'
}
const bannerButton={
 backgroundColor:'#df453e',
 padding:'25px',
 color:'white',
 marginLeft:'550px',
 fontSize:'18px',
 borderRadius:'5px'
}

const About = () => {
    return (
        <div>
             <Box style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
         <Typography>
         <h1 style={bannerText}>About Us</h1>
         </Typography>
        </Grid>
        
      </Grid>
    </Box>
        </div>
    );
};

export default About;