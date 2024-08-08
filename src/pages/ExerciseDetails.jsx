import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { exerciseOptions, youtubeSearchOptions, fetchData } from '../utils/FetchData'
import SimilarExercises from '../components/SimilarExercises'
import ExerciseVideos from '../components/ExerciseVideos'
import Detail from '../components/Detail'


const ExerciseDetails = () => {

  const [exerciseDetails, setExerciseDetails] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])
  let { id } = useParams();
  useEffect(()=>{
    async function fetchAllData() {
      let exerciseDataURL = 'https://exercisedb.p.rapidapi.com';
      let youtubeSearchURL = 'https://youtube-search-and-download.p.rapidapi.com';

      let exerciseDetailsData = await fetchData(`${exerciseDataURL}/exercises/exercise/${id}`,exerciseOptions);
      setExerciseDetails(exerciseDetailsData);

      let exerciseVideosData = await fetchData(`${youtubeSearchURL}/search?query=${exerciseDetailsData.name}`,youtubeSearchOptions);
      setExerciseVideos(exerciseVideosData?.contents);

      let targetMuscleExercisesData = await fetchData(`${exerciseDataURL}/exercises/target/${exerciseDetailsData.target}`,exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData)

      let equipmentExercisesData = await fetchData(`${exerciseDataURL}/exercises/equipment/${exerciseDetailsData.equipment}`,exerciseOptions);
      setEquipmentExercises(equipmentExercisesData)

    }
    fetchAllData();
  },[id])


  return (
    <Box py={8} sx={{display:"flex" , flexDirection:'column' , gap:'50px'}}>
      <Detail exerciseDetails={exerciseDetails} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetails?.name} />
      <SimilarExercises exercises={targetMuscleExercises} name={'Target'} />
      <SimilarExercises exercises={equipmentExercises} name={'Equipment'} />
    </Box>
  )
}

export default ExerciseDetails
