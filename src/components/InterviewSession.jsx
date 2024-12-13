import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import SpeechToText from './SpeechToText';
import TextToSpeech from './TextToSpeech';
import InterviewHistory from './InterviewHistory';

const InterviewSession = ({ 
  onTranscriptComplete, 
  aiResponse, 
  history,
  isProcessing 
}) => {
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Your Response:
      </Typography>
      <SpeechToText 
        onTranscriptComplete={onTranscriptComplete} 
        disabled={isProcessing}
      />
      
      {aiResponse && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            Interviewer's Response:
          </Typography>
          <Typography variant="body1" gutterBottom>
            {aiResponse}
          </Typography>
          <TextToSpeech text={aiResponse} />
        </Box>
      )}

      {history.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <InterviewHistory history={history} />
        </Box>
      )}
    </Paper>
  );
};

export default InterviewSession;