import PropTypes from "prop-types";
import { Box, Button, IconButton } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import styles from "./Record.module.css";
import { useState, useRef, useEffect } from "react";

const AudioButton = ({ text, audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    const handleEnded = () => {
      setIsPlaying(false);
    };

    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.addEventListener("ended", handleEnded);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener("ended", handleEnded);
      }
    };
  }, [audioRef]);

  return (
    <Button
      variant="outlined"
      onClick={handlePlayAudio}
      sx={{
        minWidth: "180px",
        height: "50px", // Set a fixed height to prevent shrinking
        p: 0,
        fontSize: "16px",
        mx: 1,
        borderRadius: 1,
        textTransform: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // position: "relative",
      }}
    >
      {isPlaying ? (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <div className={styles.waveform}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
        </Box>
      ) : (
        <>
          <IconButton
            sx={{
              color: 'inherit', // Ensures the icon button inherits the text color of the button
              "&:focus": { outline: "none" },
              my:0,
              py:0
            }}
          >
            <PlayCircleIcon />
          </IconButton>
          {text}
        </>
      )}
      <audio ref={audioRef} src={audioSrc} />
    </Button>
  );
};

AudioButton.propTypes = {
  text: PropTypes.string.isRequired,
  audioSrc: PropTypes.string.isRequired,
};

export default AudioButton;




