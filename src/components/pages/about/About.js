import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bg from '../../../images/header-bg-copyright.jpg';
import { Typography } from '@mui/material';
import { fontSize } from '@mui/system';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import about2 from '../../../images/image-copyright-20.jpg'
import about from '../../../images/about.PNG'
import about3 from '../../../images/image-copyright-18.jpg'
import Footer from '../footer/Footer';


const bannerBg={
    background:`url(${bg})`,
      backgroundPosition:'center',
    // backgroundSize:'cover',
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
const aboutt = {
    marginLeft:'100px'
}
const fullabout = {
    marginTop:'100px'
}
const abouttt = {
    backgroundColor:'#1b3e41',
    color:'white',

}
const historytitle = {
    fontWeight:'bolder',
    fontFamily:'Gilroy, sans-serif',
    fontSize:'77px',
    lineHeight:'77px',
   marginLeft:'40px',
   marginBottom:'50px',
   marginTop:'50px'
}
const historyparagaraph = {
    fontFamily:'"Noto Sans", sans-serif',
    fontSize:'16px',
    lineHeight:'28px',
    color:'#97adaf',
    marginLeft:'40px'
}
const aboutpart = {
    marginTop:'100px'
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

    <Grid container spacing={2} style={aboutpart}>
  <Grid item xs={12} sm={12} md={6} lg={6}>
    <img src={about3} className="img-fluid w-100"></img>
  </Grid>
  <Grid item xs={12} sm={12} md={6} lg={6} className="w-75" style={abouttt}>
    <h1 style={historytitle}>Our history</h1>
    <p style={historyparagaraph} className="w-75 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
  </Grid>
  
  
</Grid>

<Grid container   spacing={2} style={fullabout}>
        <Grid item xs={12} sm={12} md={5} lg={5} className="w-75 mx-5">
         <h1 className="text-center">Our mission</h1>
         <p className="text-center">We’re a bike shop, a family and a team of riders, helping folks in New York explore their passion for cycling. Biking is more than transportation or exercise, it’s a lifestyle. Whether you need help with where to ride or are in need.</p>
         <img src={about} className="img-fluid"></img>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <img style={aboutt} src={about2} className="img-fluid w-100 "></img>
        </Grid>
       
        
      </Grid>
      <Footer></Footer>
        </div>
    );
};

export default About;