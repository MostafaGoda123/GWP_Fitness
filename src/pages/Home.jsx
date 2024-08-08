import { Box } from '@mui/material'
import React, { useState } from 'react'
import SearchExercises from './../components/SearchExercises';
import HeroBanner from './../components/HeroBanner';
import Exercises from './../components/Exercises';

const Home = () => {
  const [exercises, setExercises] = useState([])
  const [activeBodyPart, setActiveBodyPart] = useState('all')

  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} activeBodyPart={activeBodyPart} setActiveBodyPart={setActiveBodyPart} />
      <Exercises setExercises={setExercises} activeBodyPart={activeBodyPart} exercises={exercises}/>
    </Box>
  )
}

export default Home
