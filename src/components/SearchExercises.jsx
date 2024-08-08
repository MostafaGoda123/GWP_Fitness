import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { url , fetchData , exerciseOptions } from '../utils/FetchData'
import HorizontalScrollBar from './HorizontalScrollBar'

const SearchExercises = ({setExercises,activeBodyPart,setActiveBodyPart}) => {

  const [search, setSearch] = useState("")
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    let fetchExerciseData = async () => {
      let bodyPartsData = await fetchData(`${url}/exercises/bodyPartList`,exerciseOptions)
      setBodyParts(['all',...bodyPartsData])
    }
    fetchExerciseData()
  }, [])
  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1000', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
              || item.target.toLowerCase().includes(search)
              || item.equipment.toLowerCase().includes(search)
              || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1400, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };
  // console.log(exercises);
  // console.log(bodyParts);

  return (
    <Stack py={10}>
      <Typography mb={5} textAlign={'center'} fontWeight={'bold'} fontSize={{xs:'25px' , md:'35px'}}>
        Awesome Exercises You <br />Should Know 
      </Typography>
      <Stack mb={5} direction={'row'} alignItems={'center'} height={'50px'} width={'100%'} position={'relative'}>
        <TextField 
        placeholder='Search Exercises'
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        sx={{ flex:1, input:{ border:'none' , borderRadius:'5px' , fontWeight:"bold"},background:'white' }}
        />
        <Button className='search-btn' sx={{background:'#fc2625',color:"white",height:'56px',px:{sx:"15px",md:'30px'},fontSize:{sx:'16px',md:'22px'}, position:'absolute',right:0 }}
        onClick={handleSearch}>
          Search
        </Button>
      </Stack>
      <Box sx={{position:'relative' , width:'100%' , pb:'20px'}}>
      <Box sx={{overflow:"scroll"}}>
        <HorizontalScrollBar bodyParts={bodyParts} activeBodyPart={activeBodyPart} setActiveBodyPart={setActiveBodyPart} />
      </Box>
      </Box>
    </Stack>
  )
}

export default SearchExercises
