import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
import courseReducer from "./courseSlice";
import testimonialReducer from "./testimonialSlice";
import blogReducer from "./blogSlice";
import coursesListReducer from "./courseslistSlice";

const store = configureStore({
  reducer: {
    courses: courseReducer,
    testimonial: testimonialReducer,
    blog: blogReducer,
    courseslist: coursesListReducer,

  },
  // middleware: [thunk],
});

export default store;
