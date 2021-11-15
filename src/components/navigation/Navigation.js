import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import useAuth from '../../hooks/useAuth';
const fullNav={
  padding:'20px',
  paddingBottom:'30px'
}

const navStyle = {
  
}

export default function Navigation() {
  const {user, logOut} = useAuth();
  const theme = useTheme()
  const useStyle= makeStyles({

    navItem:{
      color:'white',
      textDecoration:'none'
    },

    navIcon:{
      [theme.breakpoints.up('sm')]: {
        display:'none !important'
    }
  }
  })
  const {navItem,navIcon}=useStyle()
  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={fullNav}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            className={navIcon}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src="https://yokoo.themerex.net/wp-content/uploads/2020/02/logo_2.png"></img>
          </Typography>
          <Box>
          <Link style={navStyle} className={navItem} to="/home">
          <Button color="inherit">Home</Button>
          </Link>
          <Link className={navItem} to="/about">
          <Button color="inherit">About</Button>
          </Link>
          <Link className={navItem} to="/explore">
          <Button color="inherit">Explore</Button>
          </Link>

          {
            user?.email &&
            <Link className={navItem} to="/dashboard">
            <Button color="inherit">Dashboard</Button>
            </Link>
            
            
          }
          {
            user?.email &&
            <Link className={navItem} to="/">
            <Button color="inherit">{user.displayName}</Button>
            </Link>
            
            
          }
          
          {
            user?.email ?
          <Button onClick={logOut} color="inherit">LogOut</Button>
        
            :
            <Link className={navItem} to="/login">
          <Button color="inherit">Login</Button>
          </Link>
          }
          </Box>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
