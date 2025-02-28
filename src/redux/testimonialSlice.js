import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchTestimonials = createAsyncThunk("testimonial/fetch", async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "Jenny Wilson",
        position: "Vice President",
        message:
          "Materi yang disampaikan mudah dimengerti, kualitas instruktur sangat baik serta responnya yang cepat. So, kursus disini sangat sangat saya rekomendasikan!!",
      });
    }, 1000);
  });
});

const testimonialSlice = createSlice({
  name: "testimonial",
  initialState: {
    testimonial: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestimonials.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTestimonials.fulfilled, (state, action) => {
        state.loading = false;
        state.testimonial = action.payload;
      })
      .addCase(fetchTestimonials.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default testimonialSlice.reducer;
