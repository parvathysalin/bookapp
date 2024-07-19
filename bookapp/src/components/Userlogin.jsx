import { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Userlogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
   
    <Container maxWidth="sm">
   
      
      <Typography variant="h2" sx={{ mb: 3 }} style={{color:"#954535"}}>Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Email" fullWidth required sx={{ mb: 2 }} value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField label="Password" type="password" fullWidth required sx={{ mb: 2 }} value={password} onChange={(e) => setPassword(e.target.value)} />
        <Link to='/User'>
        <Button type="submit" variant="contained" color="primary" style={{backgroundColor:'#954535',width:'65vh',display:'block'}}>Login</Button></Link>
        <Typography variant='h5' style={{display:'inline'}}>Don't have an account?</Typography>
        <Link to='/signup'>
        <Button type="submit" color="primary" style={{width:'100px'}}>Sign up</Button></Link>
      </form>
    </Container> 
  );
}

    

export default Userlogin
   