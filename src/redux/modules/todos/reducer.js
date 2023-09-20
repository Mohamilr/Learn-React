import { SAVE_COMMENTS, SAVE_TODO, SAVE_USER_PROFILE } from "./types";

export const initialDataState = {
  todo: {},
  todoId: 1,
  userProfile: {},
  comments: ["fcsdfv"],
};

const todosReducer = (state = initialDataState, action) => {
  switch (action.type) {
    case SAVE_TODO:
      return { ...state, todo: action.data, todoId: state.todoId + 1 };
    case SAVE_COMMENTS:
      return { ...state, comments: action.data };
    case SAVE_USER_PROFILE:
      return { ...state, userProfile: action.data };
    default:
      return state;
  }
};

export default todosReducer;
