import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from './Slice.jsx';

const store = configureStore({
  reducer:{
   "username":userSliceReducer
  }
})

export default store;