import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import allReducer from "./rootReducer";

const store = createStore(allReducer, composeWithDevTools());

export default store;
