import axios from 'axios';

const API_URL = you_api_url;

export const getAIResponse = async (userInput, topic, difficulty) => {
  try {
    const response = await axios.post(`${API_URL}/chat`, { 
      message: userInput,
      topic,
      difficulty
    });
    return response.data;
  } catch (error) {
    console.error('Error getting AI response:', error);
    throw error;
  }
};

export const saveFeedback = async (interviewData) => {
  try {
    const response = await axios.post(`${API_URL}/feedback`, interviewData);
    return response.data;
  } catch (error) {
    console.error('Error saving feedback:', error);
    throw error;
  }
};

export const endInterview = async (sessionData) => {
  try {
    const response = await axios.post(`${API_URL}/end-interview`, sessionData);
    return response.data;
  } catch (error) {
    console.error('Error ending interview:', error);
    throw error;
  }
};