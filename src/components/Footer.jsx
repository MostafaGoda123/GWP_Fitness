import { Stack, Typography } from '@mui/material'
import React from 'react'
import logo from '../assets/images/Logo.png'

const Footer = () => {
  return (
    <Stack py={5} gap={3} sx={{background:`rgba(255,0,0,0.1)`}} alignItems={'center'}>
      <Stack direction={'row'} alignItems={'center'}>
        <img src={logo} alt="logo" width={40} height={40} />
        <Typography variant='h5' marginLeft={1}>
          Golds Gym
        </Typography>
      </Stack>
      <Typography variant='h5'>
        Made by Eng/ <span style={{fontWeight:"bold"}}>Mostafa ElSayed</span>
      </Typography>
    </Stack>
  )
}

export default Footer
