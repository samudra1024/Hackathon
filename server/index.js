import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { OpenAI } from 'openai';
import { SYSTEM_PROMPTS } from '../src/constants/interviewConfig.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// const openai = new OpenAI({
//   apiKey: you_api_key
// });
// uncomment the above to run
app.post('/api/chat', async (req, res) => {
  try {
    const { message, topic, difficulty } = req.body;
    
    const systemPrompt = SYSTEM_PROMPTS[topic] || 'You are an experienced technical interviewer.';
    const fullSystemPrompt = `${systemPrompt} The interview difficulty level is ${difficulty}. Provide constructive feedback and follow-up questions appropriate for this level.`;
    
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: fullSystemPrompt
        },
        {
          role: "user",
          content: message
        }
      ]
    });

    res.json({ message: completion.choices[0].message.content });
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/feedback', async (req, res) => {
  try {
    const { sessionData } = req.body;
    // Here you could save the feedback to MongoDB
    res.json({ success: true });
  } catch (error) {
    console.error('Error saving feedback:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/end-interview', async (req, res) => {
  try {
    const { sessionData } = req.body;
    // Generate final feedback and save session data
    res.json({ 
      success: true,
      feedback: 'Interview session completed successfully.'
    });
  } catch (error) {
    console.error('Error ending interview:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});