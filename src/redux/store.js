import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";
import allReducer from "./rootReducer";
import countersLICE from "./modules/analytics/analyticsSlice";

const store = configureStore({
  reducer: {
    counter: countersLICE,
  },
});

export default store;
