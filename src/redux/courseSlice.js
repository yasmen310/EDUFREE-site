import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const response = await fetch("http://localhost:3001/courses"); 
    return response.json();
  }
);

const courseSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default courseSlice.reducer;
