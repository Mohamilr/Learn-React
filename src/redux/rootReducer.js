import { combineReducers } from "redux";
import todosReducer from "./modules/todos/reducer";
import analytics from "./modules/analytics/reducer";

const allReducer = combineReducers({
  todosReducer,
  analytics,
});

export default allReducer;
