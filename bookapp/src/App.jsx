import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Route, Routes } from 'react-router-dom'
import Page1 from './components/Page1'
import Admin from './components/Admin'
import Home from './components/Home'
import Userdetails from './components/Userdetails'
import User from './components/User'
import Userlogin from './components/Userlogin'
import Bookdetails from './components/Bookdetails'
import Signup from './components/Signup'

import Bookadd from './components/Bookadd'
import Single from './components/Single'
import Rent from './components/Rent'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Page1/>}></Route>
      <Route path='/admin'element={<Admin/>}></Route>
      <Route path='/home'element={<Home/>}></Route>
      <Route path='/userdetails'element={<Userdetails/>}></Route>
      <Route path='/user'element={<User/>}></Route>
      <Route path='/userlogin'element={<Userlogin/>}></Route>
      <Route path='/books'element={<Bookdetails/>}></Route>
      <Route path='/signup'element={<Signup/>}></Route>
      <Route path='/signup'element={<Signup/>}></Route>
      <Route path='/add'element={<Bookadd/>}></Route>
      <Route path='/single'element={<Single/>}></Route>
      <Route path='/rent'element={<Rent/>}></Route>


      
     




    
     
    





      

    </Routes>
     
    
      
   
    </>
  )
}

export default App
