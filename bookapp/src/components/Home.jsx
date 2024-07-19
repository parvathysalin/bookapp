
import React from 'react'
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';


const Home = () => {
    // const rows=[{mname:'fsdg',mimage:'gue',mdes:'jdhdj',mdir:'fefe'},{mname:'dd',mimage:'sdd',mdes:'fge',mdir:'dffs'}]
    const [rows,setRows]=useState([])
    var navigate=useNavigate()
    
    function deletevalue(a){
    axios.delete('http://localhost:5000/deletebook/'+a).then((res)=>{
      alert('data deleted')
      window.location.reload
    }).catch((error)=>{console.log(error)})
  }

  function updatevalue(val){
    navigate('/add',{state:{val}})
  }
  function display(val){
    navigate('/single',{state:{val}})
  }
 
 useEffect(()=>{
    axios.get('http://localhost:5000/books').then((res)=>{
    setRows(res.data);
  }).catch((error)=>{
    console.log('error')
  })},[]);


  return (
    <>
   
    <Navbar/><br></br>
    <div className="style2">
   {rows.map((item)=>(
    <Card style={{border: 'solid 2px transparent',borderRadius:'5px',marginTop:'5px',backgroundColor:'beige'}}
    sx={{ minWidth: 275}}>
    <CardContent>
      <img src={item.Image} onClick={()=>{display(item)}}></img>
      <Typography variant="h5" component="div">
        {item.Name}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {item.Author}
      </Typography>
      <Typography variant="body2">
       {item.Description}
     
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={()=>{updatevalue(item._id)}}>UPDATE</Button>
      <Button size="small" onClick={()=>{deletevalue(item._id)}}>DELETE</Button>
     
      {/* <Button size="small" onClick={()=>{display(item)}} >View</Button> */}

      
    </CardActions>
  </Card>
  ))}</div>
  </>
)
}

export default Home