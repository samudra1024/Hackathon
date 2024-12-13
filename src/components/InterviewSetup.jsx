import React from 'react';
import { 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Box, 
  Button 
} from '@mui/material';
import { INTERVIEW_TOPICS, DIFFICULTY_LEVELS } from '../constants/interviewConfig';

const InterviewSetup = ({ onStart, topic, difficulty, onTopicChange, onDifficultyChange }) => {
  return (
    <Box sx={{ minWidth: 200, gap: 2, display: 'flex', flexDirection: 'column' }}>
      <FormControl fullWidth>
        <InputLabel>Topic</InputLabel>
        <Select
          value={topic}
          label="Topic"
          onChange={(e) => onTopicChange(e.target.value)}
        >
          {Object.entries(INTERVIEW_TOPICS).map(([key, value]) => (
            <MenuItem key={key} value={value}>{value}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Difficulty</InputLabel>
        <Select
          value={difficulty}
          label="Difficulty"
          onChange={(e) => onDifficultyChange(e.target.value)}
        >
          {Object.entries(DIFFICULTY_LEVELS).map(([key, value]) => (
            <MenuItem key={key} value={value}>{value}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button 
        variant="contained" 
        onClick={onStart}
        disabled={!topic || !difficulty}
      >
        Start Interview
      </Button>
    </Box>
  );
};

export default InterviewSetup;