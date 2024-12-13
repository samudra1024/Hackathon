import React, { useState } from 'react';
import { Container, Box, Typography } from '@mui/material';
import InterviewSetup from './components/InterviewSetup';
import InterviewSession from './components/InterviewSession';
import { getAIResponse } from './services/api';
import { INTERVIEW_TOPICS, DIFFICULTY_LEVELS } from './constants/interviewConfig';

function App() {
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [isInterviewStarted, setIsInterviewStarted] = useState(false);
  const [aiResponse, setAiResponse] = useState('');
  const [history, setHistory] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleStartInterview = () => {
    setIsInterviewStarted(true);
    setHistory([]);
    setAiResponse('');
  };

  const handleTranscriptComplete = async (transcript) => {
    try {
      setIsProcessing(true);
      const response = await getAIResponse(transcript, topic, difficulty);
      setAiResponse(response.message);
      setHistory(prev => [...prev, {
        userResponse: transcript,
        aiResponse: response.message
      }]);
    } catch (error) {
      console.error('Error processing response:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          AI Interview Practice
        </Typography>
        
        {!isInterviewStarted ? (
          <InterviewSetup
            topic={topic}
            difficulty={difficulty}
            onTopicChange={setTopic}
            onDifficultyChange={setDifficulty}
            onStart={handleStartInterview}
          />
        ) : (
          <InterviewSession
            onTranscriptComplete={handleTranscriptComplete}
            aiResponse={aiResponse}
            history={history}
            isProcessing={isProcessing}
          />
        )}
      </Box>
    </Container>
  );
}

export default App;