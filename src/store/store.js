import {configureStore} from "@reduxjs/toolkit";
import countSlice from "./slices/countSlice.js";

export default configureStore({
    reducer:{
        count: countSlice
    }
})