import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { TextField,Button,Alert } from '@mui/material';

const MakeAdmin = () => {
    const [email,setEmail] = useState('');
    const [success,setSuccess] = useState(false);
    const handleOnBlur = e => {
      setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = {email};
        fetch('https://fast-reaches-25590.herokuapp.com/users/admin',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
            })
.then(res=>res.json())
.then(data=>{
  if(data.modifiedCount){
    setEmail('');
    console.log(data);
    setSuccess(true);
  }
   
})

        e.preventDefault()
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img src="https://st.depositphotos.com/1002881/1285/i/600/depositphotos_12859789-stock-photo-admin-tag.jpg"></img>
          </Grid>
          <Grid item xs={12} md={6}>
            <form onSubmit={handleAdminSubmit}>
      <TextField
      sx={{width:'70%', m:'5'}} 
      type="email" 
      label="Email" 
      onBlur={handleOnBlur}
      variant="standard"

      
      />
      <br></br>
      <Button sx={{width:'70%'}}   variant="contained" type="submit">Make an User Admin</Button>

            </form>
            {
    success && <Alert severity="success">Successfully added admin</Alert>

}
          </Grid>
          
          
        </Grid>
      </Box>
    );
};

export default MakeAdmin;