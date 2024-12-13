export const INTERVIEW_TOPICS = {
  JAVASCRIPT: 'JavaScript',
  REACT: 'React',
  NODE: 'Node.js',
  SYSTEM_DESIGN: 'System Design',
  DATA_STRUCTURES: 'Data Structures',
};

export const DIFFICULTY_LEVELS = {
  BEGINNER: 'Beginner',
  INTERMEDIATE: 'Intermediate',
  ADVANCED: 'Advanced',
};

export const SYSTEM_PROMPTS = {
  [INTERVIEW_TOPICS.JAVASCRIPT]: 'You are an experienced JavaScript technical interviewer. Focus on core concepts, ES6+ features, and practical problem-solving.',
  [INTERVIEW_TOPICS.REACT]: 'You are an experienced React technical interviewer. Focus on hooks, state management, and React best practices.',
  [INTERVIEW_TOPICS.NODE]: 'You are an experienced Node.js technical interviewer. Focus on backend concepts, API design, and performance.',
  [INTERVIEW_TOPICS.SYSTEM_DESIGN]: 'You are an experienced system design interviewer. Focus on scalability, reliability, and architectural decisions.',
  [INTERVIEW_TOPICS.DATA_STRUCTURES]: 'You are an experienced algorithms interviewer. Focus on data structures, time complexity, and optimization.',
};