import { configureStore } from "@reduxjs/toolkit";
import { FormReducer } from "../Reducers/formreducer";

const store = configureStore({
  reducer: {
    FormReducer: FormReducer
  }
});

export default store;

