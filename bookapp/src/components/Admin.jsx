import { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
   
      
      <div className="style1">
   
    <Container maxWidth="sm">
      <Typography variant="h2" sx={{ mb: 3 }} style={{opacity:'1',color:'#954535'}}>Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Email" fullWidth required sx={{ mb: 2 }} 
        value={email} onChange={(e) => setEmail(e.target.value)}
          style={{opacity:'1'}} />
        <TextField label="Password" type="password" fullWidth required sx={{ mb: 2 }} value={password} onChange={(e) => setPassword(e.target.value)} style={{opacity:'1'}}/>
        <Link to='/home'>
        <Button type="submit" variant="contained" color="primary" style={{backgroundColor:'#954535',width:'65vh',opacity:'1'}}>Login</Button></Link>
      </form>
    </Container></div>
    )
}

      {/* <Link to='/home'>
      <Button variant='outlined'>LOGIN</Button></Link> */}

export default Admin