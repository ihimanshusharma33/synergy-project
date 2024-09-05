// themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Function to get the initial theme from localStorage or default to 'light'
const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('theme') || 'light';
  }
  return 'light';
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: getInitialTheme(),
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme); // Persist new theme to localStorage
      return newTheme;
    },
    setTheme: (state, action) => {
      localStorage.setItem('theme', action.payload); // Persist specific theme to localStorage
      return action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
