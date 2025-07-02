import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import enrollmentReducer from './enrollmentSlice';

export const store = configureStore({
  reducer: {
    enrollment: enrollmentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
