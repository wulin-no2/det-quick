import PropTypes from "prop-types";
import { Button, Box, IconButton } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { useState, useRef, useEffect } from "react";
import styles from "./Record.module.css";

const AudioButton = ({ text, audioSrc, sx, onEnded, disabled }) => {
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
      if (onEnded) {
        onEnded();
      }
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
  }, [onEnded]);

  return (
    <Button
      variant="outlined"
      onClick={!disabled ? handlePlayAudio : null}
      sx={{
        minWidth: "160px",
        height: "44px", // Set a fixed height to prevent shrinking
        pr: 3,
        fontSize: "16px",
        mx: 1,
        borderRadius: 1,
        textTransform: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: 'center',
        ...sx, // Apply additional styles
      }}
      disabled={disabled}
    >
      {!disabled && isPlaying ? (
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
            }}
            disabled={disabled} // Disable the icon button when the component is disabled
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
  text: PropTypes.string,
  audioSrc: PropTypes.string.isRequired,
  sx: PropTypes.object, // Add sx prop type
  onEnded: PropTypes.func,
  disabled: PropTypes.bool, // Add disabled prop type
};

export default AudioButton;




