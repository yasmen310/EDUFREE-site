import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import image1 from "../assets/IMGS/pexels-edmond-dantès-8555673 1 (1).png";
import image2 from "../assets/IMGS/pexels-lukas-590016 1 (2).png";
import image3 from "../assets/IMGS/pexels-picjumbocom-196645 (1) 1.png";
import image4 from "../assets/IMGS/pexels-brett-sayles-2881232 1.png";
import image5 from "../assets/IMGS/unsplash_m_HRfLhgABo.png";
import image6 from "../assets/IMGS/pexels-shane-aldendorff-924676 1.png";
import image7 from "../assets/IMGS/pexels-cats-coming-421999 1.png";
import image8 from "../assets/IMGS/pexels-pixabay-256417 1.png";
import image9 from "../assets/IMGS/pexels-olya-kobruseva-5561923 1 (1).png";
const API_URL = "https://jsonplaceholder.typicode.com/posts"; 

const courseImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
];


export const fetchCourses = createAsyncThunk("courseslist/fetchCourses", async () => {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data.slice(0, 9).map((course, index) => ({
    id: course.id,
    title: course.title,
    description: course.body.substring(0, 80) + "...",
    duration: `${Math.floor(Math.random() * 10) + 2} Jam`,
    videos: `${Math.floor(Math.random() * 30) + 10} Video`,
    students: `${Math.floor(Math.random() * 2000) + 500} Siswa`,
    image:courseImages[index] 
  }));
});

const coursesListSlice = createSlice({
  name: "courseslist",
  initialState: { courseslist: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courseslist = action.payload; 
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default coursesListSlice.reducer;
