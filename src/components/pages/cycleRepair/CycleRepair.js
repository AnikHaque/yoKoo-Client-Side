import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import repairBg from '../../../images/bike-repair-bg.jpg'
import repairImage from '../../../images/cycle.png'
import { Typography } from '@mui/material';

const repairimage = {
    width:'700px'
}
const repairimagebg = {
    background:`url(${repairBg})`,
    marginTop:'250px',
    paddingTop:'185px',
    paddingBottom:'155px',
    backgroundRepeat:'no-repeat'
}
const repairimageText = {
   color:'white',
   fontSize:'80px',
   marginTop:'-120px',
   fontWeight:'bolder',
   lineHeight:'80px'
}
const heading={
    color:'white',
    width:'200px'
}
const paragraph={
    color:'gray',
    width:'200px'
}
const span={
    color:'#de453e',
   
}

const CycleRepair = () => {
    return (
        <Box style={repairimagebg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={7}>
          <Typography>
              <img style={repairimage} src={repairImage}></img>
          </Typography>
          </Grid>
          <Grid item xs={5}>
          
           <Typography>
               <h1 style={repairimageText}>Cycle service<br></br>
& repair</h1>
           </Typography>
           <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
         <Typography>
             <h2 style={heading}> <span style={span}>01.</span> Tune-ups & <br></br> builds</h2>
             <p style={paragraph}>We have all the necessary parts to create a cycle that fits you perfectly</p>

             <h2 style={heading}><span style={span}>02.</span> Personal<br></br> cycle fit</h2>
             <p style={paragraph}>Adjusment of height, pedals, handlebar for the most comfortable ride</p>
         </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
        <Typography>
             <h2 style={heading}><span style={span}>03.</span> Adjust & <br></br> install</h2>
             <p style={paragraph}>Need a cycle repair? We offer a range of spare parts and quality service</p>

             <h2 style={heading}><span style={span}>04.</span> Free <br></br>delivery</h2>
             <p style={paragraph}>Choose a cycle at our shop and get free delivery to any location in the city</p>
         </Typography>
         
        </Grid>
        
      </Grid>
    </Box>
          </Grid>
          </Grid>
      </Box>
    );
};

export default CycleRepair;