import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar';



const Userdetails= () => {

    const [rows, setCards] = useState([]);
    useEffect(() => {
      
      axios.get('https://freetestapi.com/api/v1/users')
        .then((res) => {
          if (Array.isArray(res.data)) {
            setCards(res.data);
          } else {
            console.error('Unexpected response format:', res.data);
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);
  return (
          <div><Navbar/><br></br>
    <Box style={{background:'#b2dfdb', borderRadius:"15px" }} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {rows.length > 0 ? (
          rows.map((row) => (
            <Grid item xs={12} sm={6} md={4} key={row.id}>
              <Card style={{background:'darkslategray', borderRadius:"15px", width:"10"}} sx={{ minWidth: 275, marginBottom: 2 }}>
                  <CardMedia
                  component="img"
                  height="50"
                  image={row.cover_image}
                  alt={row.title}
                />  

                <CardContent>
                  
                  <Typography sx={{ mb: 1.5 }} color="common.white" >
                    ID: {row.id}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="common.white">
                    Name: {row.name}
                  </Typography>
                 
                  <Typography sx={{ mb: 1.5 }} color="common.white">
                    Age: {row.age}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="common.white">
                    Email: {row.email}
                    <br/>
                    <br/>
                   
                  </Typography>
                </CardContent>
                
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="body2" color="text.secondary">
              No products available
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box></div>
  )
}

export default Userdetails
 

