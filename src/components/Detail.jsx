import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import bodyPartImage from '../assets/icons/body-part.png'
import targetImage from '../assets/icons/target.png'
import equipmentImage from '../assets/icons/equipment.png'

const Detail = ({exerciseDetails}) => {
   // console.log(exerciseDetails);

   return (
      <Stack direction={{xs:'column' , md:'row'}} gap={'50px'} alignItems={'center'}>
         <Stack sx={{background:'red' , flex:'1'}}>
            <img src={exerciseDetails?.gifUrl} alt={exerciseDetails?.name} width={'100%'} />
         </Stack>
         <Stack gap={3} sx={{flex:'1'}}>
            <Typography variant='h3'>{exerciseDetails?.name}</Typography>
            <Typography variant='h6'>
               Exercises keep you strong.{' '}
               <span style={{ fontWeight:'bold' }}>{exerciseDetails?.name}</span> bup is one
               of the best <br /> exercises to target your <span style={{ fontWeight:'bold' }}>{exerciseDetails?.target}</span>. It will help you improve your{' '}
               <br /> mood and gain energy.
            </Typography>
            <Stack gap={2} sx={{flex:'1'}}>
               <Box sx={{display:'flex' , alignItems:'center',gap:'20px'}}>
                  <Button sx={{width:'80px',height:'80px',background:'#FFF2DB',borderRadius:'50%'}}><img src={bodyPartImage} alt="..." width={40} height={40} /></Button>
                  <Typography variant='h5'>{exerciseDetails?.bodyPart}</Typography>
               </Box>
               <Box sx={{display:'flex' , alignItems:'center',gap:'20px'}}>
                  <Button sx={{width:'80px',height:'80px',background:'#FFF2DB',borderRadius:'50%'}}><img src={targetImage} alt="..." width={40} height={40} /></Button>
                  <Typography variant='h5'>{exerciseDetails?.target}</Typography>
               </Box>
               <Box sx={{display:'flex' , alignItems:'center',gap:'20px'}}>
                  <Button sx={{width:'80px',height:'80px',background:'#FFF2DB',borderRadius:'50%'}}><img src={equipmentImage} alt="..." width={40} height={40} /></Button>
                  <Typography variant='h5'>{exerciseDetails?.equipment}</Typography>
               </Box>
            </Stack>
         </Stack>
      </Stack>
   )
}

export default Detail
