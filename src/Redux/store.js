import { configureStore } from "@reduxjs/toolkit";
import FormReducer from "../Reducers/formreducer";


export default configureStore({
    reducer: {
        formReducer: FormReducer}
});