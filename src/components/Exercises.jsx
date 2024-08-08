import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '../utils/FetchData'
import { Box, Stack, Typography } from '@mui/material'
import Pagination from '@mui/material/Pagination'
import ExerciseCard from './ExerciseCard'



const Exercises = ({setExercises , activeBodyPart , exercises}) => {

  useEffect(() => {
    let fetchExerciseData = async () => {
      let exercisesData = []
      if (activeBodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=500', exerciseOptions);
      }else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${activeBodyPart}?limit=1000`, exerciseOptions);
      }
      setExercises(exercisesData)
    }
    fetchExerciseData()
  }, [activeBodyPart])
  let [currentPage, setCurrentPage] = useState(1)
  let exercisesPerPage = 12 ;
  let indexOfLastExercise = currentPage * exercisesPerPage ;
  let indexOfFirstExercise = indexOfLastExercise - exercisesPerPage ;
  let currentExercises = exercises?.slice(indexOfFirstExercise,indexOfLastExercise)
  const paginate = ( e , value ) => {
    window.scrollTo({ top: 1400 , behavior: 'smooth' })
    setCurrentPage(value)
    // console.log(value);
  }

  return (
    <Stack py={10}>
      <Typography variant='h3' textAlign={'center'} mb={5}>
        Searching Results
      </Typography>
      <Box
      style={{display:'grid' , gridTemplateColumns: `repeat(auto-fill,minmax(250px,1fr))` , gap:'25px'}}
      >
        {currentExercises?.map((exercise,idx) => (
          <ExerciseCard key={idx} exercise={exercise} idx={idx} />
        ))}
      </Box>
      {exercises.length > exercisesPerPage && 
      <Pagination 
      sx={{width:'fit-content' , margin:'50px auto 0'}}
      color='standard'
      shape='rounded'
      defaultPage={1}
      count={Math.ceil(exercises?.length / exercisesPerPage)}
      page={currentPage}
      onChange={paginate}
      size='large'
      />}
    </Stack>
  )
}

export default Exercises
