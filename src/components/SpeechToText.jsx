import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Button, Box, Typography } from '@mui/material';

const SpeechToText = ({ onTranscriptComplete }) => {
  const [isListening, setIsListening] = useState(false);
  const { transcript, resetTranscript } = useSpeechRecognition();

  const handleStartListening = () => {
    setIsListening(true);
    resetTranscript();
    SpeechRecognition.startListening({ continuous: true });
  };

  const handleStopListening = () => {
    setIsListening(false);
    SpeechRecognition.stopListening();
    onTranscriptComplete(transcript);
  };

  return (
    <Box sx={{ my: 2 }}>
      <Button 
        variant="contained" 
        color={isListening ? "secondary" : "primary"}
        onClick={isListening ? handleStopListening : handleStartListening}
        sx={{ mb: 2 }}
      >
        {isListening ? 'Stop Speaking' : 'Start Speaking'}
      </Button>
      <Typography variant="body1">
        {transcript}
      </Typography>
    </Box>
  );
};

export default SpeechToText;