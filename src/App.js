import { Box } from '@mui/material'
import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import ExerciseDetails from './pages/ExerciseDetails';
import Home from './pages/Home';

const App = () => {
  return (
    <>
    <Box px={{xs:'3%' , md:'6%' , lg:'9%'}}>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetails />} />
      </Routes>
    </Box>
    <Footer />
    </>
  )
}

export default App
