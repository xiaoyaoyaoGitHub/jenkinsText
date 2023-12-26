import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./modules/counter"

export default configureStore({
    reducer: {
        counter: countReducer
    }
})