import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EnrollmentState } from '../types/course';

const initialState: EnrollmentState = {
  enrolledCourseIds: [],
};

export const enrollmentSlice = createSlice({
  name: 'enrollment',
  initialState,
  reducers: {
    enroll: (state, action: PayloadAction<string>) => {
      if (!state.enrolledCourseIds.includes(action.payload)) {
        state.enrolledCourseIds.push(action.payload);
      }
    },
    unenroll: (state, action: PayloadAction<string>) => {
      state.enrolledCourseIds = state.enrolledCourseIds.filter(
        (id) => id !== action.payload
      );
    },
  },
});

export const { enroll, unenroll } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
