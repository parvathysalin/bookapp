
        
                  
                  {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{textAlign:'left'}}>
                    Library App
                  </Typography>
                  <Link to={'/home'}><Button variant="contained" style={{width:'50px'}}>view</Button></Link>
                  <Link to={'/add'}><Button variant="contained" style={{width:'50px'}}>add</Button></Link>

                  <Link to={'/userdetails'}><Button variant="contained" style={{width:'50px'}}>Users</Button></Link>
                  <Link to={'/'}><Button variant="contained" style={{width:'50px'}}>Logout</Button></Link>
                   */}
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed" style={{width:'100vw',backgroundColor:'#954535'}}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Library App
        </Typography>
        {auth && (
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
               <Link to={'/home'}>
              <MenuItem onClick={handleClose}>Dashboard</MenuItem></Link>
              <Link to={'/add'}>
              <MenuItem onClick={handleClose}>Add Books</MenuItem></Link>
              <Link to={'/'}>
              <MenuItem>Logout</MenuItem></Link>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  </Box>
  )
}

                
                  