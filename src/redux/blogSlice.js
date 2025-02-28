import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import image1 from "../assets/IMGS/woman-writing-on-paper-3228878.png";
import image2 from "../assets/IMGS/unsplash_ItdIxyIfuVY.png";
import image3 from "../assets/IMGS/unsplash_ItdIxyIfuVY (3).png";
import image4 from "../assets/IMGS/unsplash_ItdIxyIfuVY (2).png";
import image5 from "../assets/IMGS/unsplash_ItdIxyIfuVY (1).png";

export const fetchBlogs = createAsyncThunk("blog/fetchBlogs", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const apiBlogs = response.data.slice(0, 5);
  const images = [image1, image5, image3, image4, image2];

  const formattedApiBlogs = apiBlogs.map((blog, index) => ({
    ...blog,
    image: images[index % images.length],
  }));

  const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

  return [...formattedApiBlogs,...storedBlogs];
});



const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
    status: "idle",
    error: null,
  },
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;  
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;
