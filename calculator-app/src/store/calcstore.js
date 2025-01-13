import {configureStore} from "@reduxjs/toolkit";
import resultReducer from "../reducers/calcreducer";
export default configureStore({
    reducer: {
        result : resultReducer
    }
});