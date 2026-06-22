import { configureStore } from "@reduxjs/toolkit";
import slice from '../store/slice'

export const store = configureStore({
    reducer: {mySlice: slice}
})