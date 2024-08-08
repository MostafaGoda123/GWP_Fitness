import { Box, Grid,  Typography } from '@mui/material'
import React from 'react'


const ExerciseVideos = ({exerciseVideos , name}) => {

  // console.log(exerciseVideos);
  // console.log(name);

  return (
    <Box>
      <Typography mb={3} variant='h4'>
        Watch <span style={{color:'#ff2625' , textTransform:'capitalize'}}>{name}</span> exercise videos
      </Typography>
      <Grid container spacing={3}>
        {exerciseVideos.slice(0,3).map((item,index) => (
          <Grid item key={index} xs={12} md={6} lg={4} sx={{cursor:'pointer'}}
          onClick={() => {window.open(`https://www.youtube.com/watch?v=${item.video.videoId}`)}}>
            <img src={item.video.thumbnails[0].url} alt="" width={'100%'} height={225} />
            <Typography variant='h5'>{item?.video?.title}</Typography>
            <Typography variant='h6'>{item?.video?.channelName}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ExerciseVideos
