import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bg from '../../../images/banner.jpg';
import { Typography } from '@mui/material';
import { fontSize } from '@mui/system';

const bannerBg={
    background:`url(${bg})`,
     backgroundPosition:'left',
    backgroundSize:'cover',
    height:'80vh'
}
const bannerText={
    fontSize:'75px',
    color:'white',
    fontWeight:'bolder',
    textAlign:'center',
    marginTop:'50px'

}
const bannerButton={
 backgroundColor:'#df453e',
 padding:'25px',
 marginLeft:'550px',
 color:'white',
 marginTop:'50px',

 fontSize:'18px',
 borderRadius:'5px'
}

const Banner = () => {
    return (
        <div>
             <Box style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
         <Typography>
         <h1 style={bannerText}>Discover The Joy <br></br>Of Cycling</h1>
         </Typography>
         <button style={bannerButton}>Discover Our Services</button>
        </Grid>
        
      </Grid>
    </Box>
        </div>
    );
};

export default Banner;