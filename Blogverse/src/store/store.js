import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../store/features/authSlice.js";  // Assuming default export from authSlice

const store = configureStore({
    reducer: {
        auth: authSliceReducer  // Assign a key like 'auth' to the reducer
    }
});

export default store;
