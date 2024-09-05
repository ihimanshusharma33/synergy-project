// store.js
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './components/Theme.js';

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
