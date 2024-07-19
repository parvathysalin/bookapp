import { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setname] = useState('');
  const [place, setplace] = useState('');
  const [age, setage] = useState('');
  const [education, seteducation] = useState('');
  const [phone, setphone] = useState('');
  const [address, setaddress] = useState('');








  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
<div>
   
    
    <Container maxWidth="sm">
   
      
     
      <form onSubmit={handleSubmit}>
      <TextField label="Name" fullWidth required sx={{ mb: 2 }} value={name} onChange={(e) => setname(e.target.value)} />
      <TextField label="Place" fullWidth required sx={{ mb: 2 }} value={place} onChange={(e) => setplace(e.target.value)} />
      <TextField label="Age" fullWidth required sx={{ mb: 2 }} value={age} onChange={(e) => setage(e.target.value)} />
      <TextField label="Email" fullWidth required sx={{ mb: 2 }} value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Education" fullWidth required sx={{ mb: 2 }} value={education} onChange={(e) => seteducation(e.target.value)} />
      <TextField label="Phone" fullWidth required sx={{ mb: 2 }} value={phone} onChange={(e) => setphone(e.target.value)} />
      <TextField label="Address" fullWidth required sx={{ mb: 2 }} value={address} onChange={(e) => setaddress(e.target.value)} />
      <TextField label="Password" type="password" fullWidth required sx={{ mb: 2 }} value={password} onChange={(e) => setPassword(e.target.value)} />
        <Link to='/User'>
        <Button type="submit" variant="contained" color="primary" style={{backgroundColor:'#954535',width:'65vh'}}>SUBMIT</Button></Link>
       
      </form>
    </Container> </div>
  );
}

    

export default Signup
   