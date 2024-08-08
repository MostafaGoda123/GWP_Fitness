import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import heroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box position={`relative`}>
      <Stack gap={3} mt={{xs:10 , md:15}} mb={5}>
        <Typography color={`#fc2625`} variant='h5' fontWeight={'bold'}>
          Fitness Club
        </Typography>
        <Typography fontWeight={700} fontSize={'40px'}>
          Sweat, Smile <br />and Repeat
        </Typography>
        <Typography fontSize={'20px'}>
          Check out the most effective exercises
        </Typography>
        <Button variant="contained" color="error" href='#exercises' style={{width:'fit-content' , padding:'10px 25px'}}>
          Explore Exercises
        </Button>
        <Typography mt={{xs:'-40px' , md:'-80px'}} fontWeight={'bold'} fontSize={{xs:'90px',sm:'150px',md:'200px'}} color={`#fc2625`} style={{opacity:'0.1'}}>
          Exercise
        </Typography>
      </Stack>
      <img src={heroBannerImage} alt="banner" className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner
