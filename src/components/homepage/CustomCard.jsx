import React from 'react';
import { Box, Typography } from '@mui/material';
import VocabularyIcon from '@mui/icons-material/LibraryBooks'; 
import SpeakingIcon from '@mui/icons-material/RecordVoiceOver';
import ListeningIcon from '@mui/icons-material/Hearing';
import ReadingIcon from '@mui/icons-material/MenuBook';
import WritingIcon from '@mui/icons-material/Create';
import PeopleIcon from '@mui/icons-material/People'; 
import { orange } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";


function CustomCard() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const iconsData = [
    { icon: <VocabularyIcon />, title: 'Vocabulary', types: '1' , moduleId: 1 },
    { icon: <SpeakingIcon />, title: 'Speaking', types: '4' , moduleId: 2 },
    { icon: <ListeningIcon />, title: 'Listening', types: '2' , moduleId: 3 },
    { icon: <ReadingIcon />, title: 'Reading', types: '3' , moduleId: 4 },
    { icon: <WritingIcon />, title: 'Writing', types: '2' , moduleId: 5 },
    { icon: <PeopleIcon />, title: 'Sample', types: '2' , moduleId: 6 },
  ];
  const handleClick = (moduleId) => {
    localStorage.setItem('moduleId', moduleId);
    navigate('/practice');
  };

  return (
    
    <Box
      sx={{
        width:'1200px',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: '10px',
        // boxShadow: '0px 0px 15px rgba(0,0,0,0.1)',
        overflow: 'hidden',
        p: 2,
      }}
    >
      {iconsData.map((data, index) => (
        <Box
          key={index}
          onClick={() => handleClick(data.moduleId)}
          sx={{
            mt: 3,
            mb: 2.5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer',
            width: 'calc(15.8333%)',
            color: '#777',
          }}
        >
          <Box
            sx={{
              width: 70,
              height: 70,
              backgroundColor: orange[50],
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
            }}
          >
            {React.cloneElement(data.icon, { sx: { fontSize: 40, color: orange[500] } })}
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontSize: '18px',
              fontWeight: 'bold',
              mt: 0.75,
              color: '#333',
            }}
          >
            {t(data.title)}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mt: 0.25,
              color: '#777',
            }}
          >
             {data.types === '1' ? `${data.types} ${t('type')}` : `${data.types} ${t('types')}`}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default CustomCard;
