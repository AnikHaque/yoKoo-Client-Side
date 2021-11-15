import { Container, Grid, Typography,Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import login from '../../../../images/login.jpg';
import { Link, useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import './Register.css'

const loginImage = {
    width:'580px'
}
const Register = () => {

const [loginData,setLoginData] = useState({})
const history = useHistory();
const location = useLocation();

const {user, registerUser, isLoading,authError,signInWithGoogle} = useAuth()
const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = {...loginData};
    newLoginData[field] = value;
    console.log(newLoginData);
    setLoginData(newLoginData);
}

    const handleLoginSubmit = e => {
        if(loginData.password !=loginData.password2){
            alert('Your Password did not match');
            return

        }
        registerUser(loginData.email, loginData.password,loginData.name, history);
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(useLocation,useHistory);
    }
    return (
        <Container>
 <Grid container spacing={2}>
        <Grid item sx={{mt:8}} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
<h1 className="fw-bold text-center">Please Register</h1>
          </Typography>

{ !isLoading && <form className="bg-primary text-white p-5 mb-5" onSubmit={handleLoginSubmit}>
    <TextField 
    sx={{width:'75%', m:1}}
    name="email"
    id="standard-basic" 
    label="Your Email"
    type="email"
    onChange={handleOnChange}
     variant="standard"
    />
    
    <TextField 
sx={{width:'75%', m:1}}
name="name"
id="standard-basic" 
label="Your Name"
onChange={handleOnChange}
 variant="standard"

  />
    
    <TextField
    sx={{width:'75%', m:1}}
    name="password"
              id="standard-basic"
              label="Your Password"
              onChange={handleOnChange}
              type="password"
              variant="standard"
    />
    
    <TextField
    sx={{width:'75%', m:1}}
    name="password2"
              id="standard-basic"
              label="ReType Your Password"
              onChange={handleOnChange}
              type="password"
              variant="standard"
    />
    <Button sx={{width:'75%', m:1}} variant="contained" type="submit">Register</Button>
    <Link style={{textDecoration:'none', marginLeft:'50px'}} to="/login">
    <Button variant="text" className="text-white">Already Registered??? Please Login</Button>
    
    </Link>
    
    </form>
    
}
<Button onClick={handleGoogleSignIn} variant="contained">Sign In With Google</Button>
{
    isLoading && <CircularProgress color="inherit" />

}
{
    user?.email && <Alert severity="success">Successfully Created The User!!!</Alert>

}
{
    authError && <Alert severity="error">Email Already Exists!!!</Alert>


}

        </Grid>
        <Grid item xs={12} md={6}>
        <img src={login} style={loginImage}></img>
        </Grid>
        
        
      </Grid>
        </Container>
    );
};

export default Register;