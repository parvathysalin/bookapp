import React,{ useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';


const Bookadd = ({book}) => {
  const [form,setForm]=useState({
    Image:book ? book.Image ||'':'',
    Name:book? book.Name || '':'',
    Author:book ? book.Author ||'':'',
    Description:book? book.Description || '':''
  })
const location=useLocation()
  
  function valueadd(){
  //   const name=document.getElementById('person.name')?.value;
  //   axios.post('http://localhost:3000/addmovie',{name}).then((res)=>{if(res.data.valid){console.log('Values added succesfully');}
  // else{alert('invalid')}}).catch((error)=>console.log('error'))
     if(location.state!=null)
    {axios.put('http://localhost:5000/editbook/'+location.state.val._id,form).then((res)=>{
      alert('data updated');
         }).catch((error)=>{console.log(error);})}
         else{
              axios.post('http://localhost:5000/addbook',form).then((res)=>{
                alert('data added')
              }).catch((error)=>{console.log(error)})
            }}
            function valueCap(e){
       
              setForm({...form,[e.target.name]:e.target.value})}

            function senddata(){
                if(location.state!=null)
                 {axios.put('http://localhost:5000/editbook/'+location.state.val._id,form).then((res)=>{
                   alert('data updated');
                      }).catch((error)=>{console.log(error);})}
              else{
                axios.post('http://localhost:5000/addbook',form).then((res)=>{
                  alert('data added')
                }).catch((error)=>{console.log(error)})
              }
              }            

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
   <> <Navbar/><br></br><br></br>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
      required
      id="outlined-required"
      label="Image"
      name="Image"
      value={form.Image}
      onChange={valueCap}


    />
    </div>
    <div>
    <TextField
      required
      id="outlined-required"
      label="Name"
      name='Name'
      value={form.Name}
      onChange={valueCap}


    />
</div>
<div>
    <TextField
      required
      id="outlined-required"
      label="Author"
      name='Author'
      value={form.Author}
      onChange={valueCap}

    />
</div>
<div>
    <TextField
      required
      id="outlined-required"
      label="Description"
      name='Description'
      value={form.Description}
      onChange={valueCap}

    />
</div>
<Button style={{backgroundColor:'#954535',color:'beige'}} onClick={valueadd}>
    Add
</Button>
    </Box></>
   
     )
}

export default Bookadd