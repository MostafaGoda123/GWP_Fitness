import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import gymIcon from '../assets/icons/gym.png'
import "react-horizontal-scrolling-menu/dist/styles.css";

const HorizontalScrollBar = ({bodyParts,activeBodyPart,setActiveBodyPart}) => {

const LeftArrow = () => {
   const { scrollPrev } = useContext(VisibilityContext);
   return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
   );
};

const RightArrow = () => {
   const { scrollNext } = useContext(VisibilityContext);
   return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
   );
};

   return (
      <>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} > 
         {bodyParts?.map((item) => (
            <Box 
            sx={{m:2,p:2,width:'200px',display:'flex' , flexDirection:'column' , gap:1 , alignItems:"center" , cursor:'pointer',borderRadius:'20px' ,background:'white' , border:activeBodyPart===item?"2px solid #fc2625":"2px solid transparent" }}
            onClick={()=>{
               setActiveBodyPart(item)
               window.scrollTo({ top: 1400, left: 100, behavior: 'smooth' })}}
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}>
               <img src={gymIcon} alt="gym" style={{width:"40px" , height:"40px"}}/>
               <Typography variant='h5'>{item}</Typography>
            </Box>
         ))}
      </ScrollMenu>
      </>
   )
}

export default HorizontalScrollBar
