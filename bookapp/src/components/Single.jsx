import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Navbar } from './Navbar';
import { Button } from '@mui/material';



const Single = ({book}) => {
    const [form,setForm]=useState({
        Name:book? book.Name || '':'',
        Image:book ? book.Image ||'':'',
        Author:book ? book.Author ||'':'',
        Description:book? book.Description || '':''
      });
    var navigate=useNavigate();

      function rental(val){
        navigate('/rent',{state:{val}})
      

      }
    const location=useLocation();
    useEffect(()=>{
      if(location.state!=null){
        setForm({...form,
            Image:location.state.val.Image,
          Name:location.state.val.Name,
      
        Author:location.state.val.Author,
          Description:location.state.val.Description
        })
      }
    })        
   
  return (
    <div className='style1'>
      <Navbar/>
        <h2>{form.Name}</h2>
        <img src={form.Image} alt='image'></img>
        <p>{form.Author}</p>
        <p>{form.Description}</p>
        <Button onClick={rental(form._id)}>RENT</Button>

    </div>
  )
}

export default Single