import * as React from "react";
import { useRef, useState,} from "react";
import PropTypes from "prop-types";
import { Box, Typography, Grid, ListItem, Button} from "@mui/material";
import { green, grey, orange,blue } from "@mui/material/colors";
import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import { useTranslation } from "react-i18next";

const WordItem = ({ word, translations, getColorByDifficulty,hideVocabulary,hideMeanings,showWord,showMeanings,onShowMeaning,
    onShowWord}) => {
  const { t } = useTranslation();
  const ukAudioRef = useRef(null);
  const usAudioRef = useRef(null);
  
//   const [playing, setPlaying] = useState({ uk: false, us: false });
  const [masterText, setMasterText] = useState('Master');

  const handlePlayAudio = (audioElement) => {
    if (audioElement.current) {
      audioElement.current.play();
      audioElement.current.onended = () => {};
    }
  };
  const handleMaster = ()=>{
    if(masterText==='Master') setMasterText('Mastered');
    else setMasterText('Master');
  }
  const handleShowVocabulary=()=>{
    onShowWord(word.id);
  }
  const handleShowMeaning=()=>{
    onShowMeaning(word.id);
  }

  return (
    <React.Fragment>
      <ListItem
        sx={{
          mx: "auto",
          width: "96%",
          "&:hover .word-text": { color: green[800] },
          pb:2
        }}
        component="div"
      >
        <Grid
          container
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            pt: 0.8,
            pb: 0.8,
          }}
        >
          {/* word and id */}
          <Grid item md={8}>
            <Box>
              {/* word */}
              <Box sx={{ display: 'flex', alignItems: 'center', pb: 1 }}>
                {/* word */}
                {(!hideVocabulary || showWord) &&(
                <Typography className="word-text"
                  sx={{ fontWeight: 'bold', fontSize: '18px', pr: 3, py:1 ,color: grey[800],border:'1px solid', borderColor:'white'}}>
                  {word.word}
                </Typography>
                )}
                {hideVocabulary && !showWord &&(
                        <Typography 
                        onClick={handleShowVocabulary}
                        sx={{fontSize:'16px', color:blue[500],py:1, px:1.5, mr:3,
                            backgroundColor:blue[50],borderRadius:2,border:'1px solid', borderColor:blue[500],
                            "&:hover":{cursor:'pointer'}
                        }}>{t('show word')}</Typography>
                )}
                {/* difficulty */}
                <Typography sx={{
                  pr: 2,
                  fontSize: '14px',
                  color: getColorByDifficulty(word.difficultyLevel),
                }}>
                  {word.difficultyLevel}
                </Typography>
                {/* id */}
                <Typography sx={{ fontSize: '14px', opacity: 0.68, backgroundColor: grey[100], py: 0.5, px: 1 }}>
                  #{word.id}
                </Typography>
              </Box>
              {/* pronunciation */}
              <Box sx={{ display: 'flex', alignItems: 'center', pt: 1, pb: 2 }}>
                {/* uk pronunciation */}
                <Box sx={{
                  backgroundColor: grey[100], px: 2, py: 0.5, borderRadius: 4, mr: 2,
                  display: 'flex', alignItems: 'center',
                  cursor: 'pointer'
                }}
                  onClick={() => handlePlayAudio(ukAudioRef, "uk")}
                >
                  <Typography sx={{ pr: 1 }}>{t('UK')}</Typography>
                  <Typography sx={{ pr: 1 }}>{word.britishPhoneticSymbols}</Typography>
                  <VolumeUpOutlinedIcon sx={{ color: orange[400] }} />
                  <audio ref={ukAudioRef}>
                    <source
                      src={word.britishAudioSrc}
                      type="audio/mp3"
                    />
                    Your browser does not support the audio element.
                  </audio>
                </Box>
                {/* us pronunciation */}
                <Box sx={{
                  backgroundColor: grey[100], px: 2, py: 0.5, borderRadius: 4, mr: 2,
                  display: 'flex', alignItems: 'center',
                  cursor: 'pointer'
                }}
                  onClick={() => handlePlayAudio(usAudioRef, "us")}
                >
                  <Typography sx={{ pr: 1 }}>{t('US')}</Typography>
                  <Typography sx={{ pr: 1 }}>{word.americanPhoneticSymbols}</Typography>
                  <VolumeUpOutlinedIcon sx={{ color: orange[400] }} />
                  <audio ref={usAudioRef}>
                    <source
                      src={word.americanAudioSrc}
                      type="audio/mp3"
                    />
                    Your browser does not support the audio element.
                  </audio>
                </Box>
              </Box>
              {/* translations */}
              {(!hideMeanings || showMeanings) &&(
                <>
              {translations.map((translateItem, translateIndex) => {
                return (
                  <Box key={translateIndex} sx={{ width: '660px', }}>
                    <Typography sx={{ fontSize: '15px', color: grey[600], lineHeight: 1.6 }}>{translateItem}</Typography>
                  </Box>
                );
              })}
              </>
              )}
              {(hideMeanings && !showMeanings) &&(
                <Box onClick={handleShowMeaning}
                sx={{fontSize:'18px', color:blue[500],py:1, px:1.5, mr:3,
                    backgroundColor:blue[50],borderRadius:2,border:'1px solid', borderColor:blue[500],
                    width:'150px',
                    textAlign:'center',
                    "&:hover":{cursor:'pointer'}
                }}>
                    <Typography>{t('show meanings')}
                    </Typography>
                </Box>
              )}
            </Box>
          </Grid>
          {/* master button*/}
          <Grid item md={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                pr: 2,
              }}
            >
                <Button variant={masterText==='Master'?"outlined":"contained"} onClick={handleMaster}
                sx={{ textTransform: 'none' }}
                >{t(masterText)}</Button>
            </Box>
          </Grid>
        </Grid>
      </ListItem>
    </React.Fragment>
  );
};

WordItem.propTypes = {
    word: PropTypes.shape({
        id: PropTypes.number.isRequired,
        word: PropTypes.string.isRequired,
        difficultyLevel: PropTypes.string.isRequired,
        translationCNList: PropTypes.string.isRequired,
        britishPhoneticSymbols: PropTypes.string.isRequired,
        britishAudioSrc: PropTypes.string.isRequired,
        americanPhoneticSymbols: PropTypes.string.isRequired,
        americanAudioSrc: PropTypes.string.isRequired,
    }).isRequired,
  translations: PropTypes.arrayOf(PropTypes.string).isRequired,
  getColorByDifficulty: PropTypes.func.isRequired,
  hideVocabulary:PropTypes.bool.isRequired,
  hideMeanings:PropTypes.bool.isRequired,
  showWord:PropTypes.bool.isRequired,
  showMeanings:PropTypes.bool.isRequired,
  onShowMeaning:PropTypes.func.isRequired,
  onShowWord:PropTypes.func.isRequired,
};

export default WordItem;
