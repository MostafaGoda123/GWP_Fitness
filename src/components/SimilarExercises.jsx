import { Box, Typography } from '@mui/material'
import React from 'react'
import ExerciseCard from './ExerciseCard';

const SimilarExercises = ({exercises , name}) => {
   return (
      <Box>
         <Typography mb={3} variant='h4'>
            Similar <span style={{color:'#ff2625' , textTransform:'capitalize'}}>{name}</span> Exercise
         </Typography>
         <Box
         style={{display:'grid' , gridTemplateColumns: `repeat(auto-fill,minmax(300px,1fr))` , gap:'25px'}}
         >
            {exercises?.slice(3,6).map((exercise,idx) => (
               <ExerciseCard key={idx} exercise={exercise} idx={idx} />
            ))}
         </Box>
      </Box>
   )
}

export default SimilarExercises
