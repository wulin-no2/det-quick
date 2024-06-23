import { Box, Typography } from "@mui/material";
import CustomCard from "./CustomCard";
import "./PracticeSection.css"; 
import { orange } from '@mui/material/colors';

function PracticeSection() {
  return (
    <Box sx={{my:4}}>
        <Box sx={{display:'flex', m:1 }}>
         <Typography variant="h5" sx={{fontWeight:'bold', color:orange[500]}}>DET{' '}</Typography>
         <Box sx={{ width: 4 }} /> 
         <Typography variant="h5" sx={{fontWeight:'bold'}}>Practice</Typography>
        </Box>
        <CustomCard/>
    </Box>       
  );
}

export default PracticeSection;
