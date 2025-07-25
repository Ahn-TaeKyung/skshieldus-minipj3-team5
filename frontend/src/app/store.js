// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import analysisReducer from '../features/analysis/analysisSlice';
import chatReducer from '../features/chat/chatSlice';
import themeReducer from '../features/theme/themeSlice';
import interviewReducer from '../features/interview/interviewSlice'; // <-- interviewSlice 임포트

export const store = configureStore({
  reducer: {
    auth: authReducer,
    analysis: analysisReducer,
    chat: chatReducer,
    theme: themeReducer,
    interview: interviewReducer, // <-- interviewReducer를 'interview'라는 이름으로 등록
  },
});