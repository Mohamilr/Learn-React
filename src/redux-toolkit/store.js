import { configureStore } from "@reduxjs/toolkit";
import counter from "./counterSlice/counterSlice";
import { typicodeApi } from "../api/redux-toolkit-api";

const reduxToolkitStore = configureStore({
  reducer: {
    counter,
    [typicodeApi.reducerPath]: typicodeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(typicodeApi.middleware),
});

export default reduxToolkitStore;
