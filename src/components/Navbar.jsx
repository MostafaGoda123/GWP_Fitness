import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack width={{xs:`100%` , lg:`40%`}} height={'10vh'} direction={'row'} alignItems={'center'} justifyContent={'space-between'} >
      <img src={logo} alt="logo" width={'48px'} height={'48px'} />
      <Stack direction={'row'} gap={'20px'}>
        <Link to={'/'} style={{textDecoration:'none' , fontSize:'20px' , color:'black'}}>Home</Link>
        <a href="#exercises" onClick={()=>{window.scrollTo({ top: 1400, left: 100, behavior: 'smooth' })}} style={{textDecoration:'none' , fontSize:'20px' , color:'black'}}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar
