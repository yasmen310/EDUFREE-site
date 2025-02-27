import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import image1 from "../assets/IMGS/unsplash_m_HRfLhgABo.png";
import image2 from "../assets/IMGS/pexels-lukas-590016 1.png";
import image3 from "../assets/IMGS/pexels-olya-kobruseva-5561923 1.png";

const courseImages = [image1, image2, image3];

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const response = await fetch("http://localhost:3001/courses");
    const data = await response.json();
    
    const updatedCourses = data.map((course, index) => ({
      ...course,
      image: courseImages[index],
    }));
    
    return updatedCourses;
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
