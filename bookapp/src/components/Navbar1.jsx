import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SvgIcon from '@mui/material/SvgIcon';
import {grey} from '@mui/material/colors';
import {MenuItem } from '@mui/material';


export const Navbar1 = () => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

 

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed" style={{width:'100vw',backgroundColor:'#954535'}}>
      <Toolbar>
        <IconButton
          size="small"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 0 }}
        >
             <Link to={'/books'}> <HomeIcon sx={{color:grey[50]}} /></Link>
        
        
        </IconButton>
        <Typography variant="h6" component="div"  sx={{ flexGrow: 1 }} style={{textAlign:'left',marginTop:'0px'}}>
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
              <AccountCircleIcon/>
          
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
               <AccountCircleIcon />
             <Link to={'/admin'}>
             <MenuItem onClick={handleClose}>Admin Login</MenuItem></Link>
              <Link to={'/userlogin'}>
              <MenuItem onClick={handleClose}>User Login</MenuItem></Link>
            </Menu>

 
 
  
          </div>
        )}
      </Toolbar>
    </AppBar>
  </Box>
  )
}

                
                  