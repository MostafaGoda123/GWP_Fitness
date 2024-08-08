import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ExerciseCard = ({exercise,idx}) => {
   // console.log(exercise?exercise:"");
   return (
      <Link style={{display:'flex',textDecoration:"none" , color:"black"}} to={`/exercise/${exercise.id}`}>
      <Box key={idx} sx={{overflow:'hidden',border:'2px solid #fc2625' , borderRadius:'20px',transition:'0.4s',":hover":{scale:'1.05',cursor:'pointer'}}}>
         <img src={exercise?.gifUrl} alt={exercise?.name} width={"100%"} />
         <Stack direction={`row`} gap={1} p={1} >
            <Button variant='contained' sx={{textDecoration:"none",color:'white' , background:'#ffa9a9',borderRadius:'20px',":hover":{background:'red',scale:'1.05'} , transition:'0.4s'}}>
               {exercise?.bodyPart}
            </Button>
            <Button variant='contained' sx={{textDecoration:"none",color:'white' , background:'#fcc757', borderRadius:'20px' , ":hover":{background:'orange',scale:'1.05'} , transition:'0.4s'}}>
               {exercise?.target}
            </Button>
         </Stack>
         <Typography fontSize={'18px'} fontWeight={700} p={1}>
            {exercise?.name}
         </Typography>
      </Box>
      </Link>
   )
}

export default ExerciseCard
