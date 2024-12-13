import React from 'react';
import { Button, Box } from '@mui/material';

const TextToSpeech = ({ text }) => {
  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <Box sx={{ my: 2 }}>
      <Button variant="contained" onClick={speak}>
        Listen to Response
      </Button>
    </Box>
  );
};

export default TextToSpeech;