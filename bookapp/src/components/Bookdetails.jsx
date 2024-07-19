import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Navbar1 } from './Navbar1';
import { Link } from 'react-router-dom';


const Bookdetails = () => {

    const [rows, setCards] = useState([]);
    useEffect(() => {
      
      axios.get(' https://freetestapi.com/api/v1/books')
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
          <div><Navbar1/><br></br>
          <div>
    <Box style={{ borderRadius:"15px" }} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {rows.length > 0 ? (
          rows.map((row) => (
            <Grid item xs={12} sm={6} md={4} key={row.id}>
              <Card style={{borderRadius:"15px", width:"10", backgroundColor:'#F0F0F0'}} sx={{ minWidth: 275, marginBottom: 2 }}>
                  

                <CardContent>
                  {row.image}
                  <Typography sx={{ mb: 1.5 }}  >
                    Title: {row.title}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} >
                    Author: {row.author}
                  </Typography>
                 
                  <Typography sx={{ mb: 1.5 }} >
                    Year: {row.publication_year}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} >
                    Genre: {row.genre}
                    <br/>
                    <br/>
                    
                    <Button variant='contained' style={{background:'#954535'}} onClick={console.log('login for renting')}>Rent</Button>
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
    </Box></div></div>
  )
}

export default Bookdetails
 

