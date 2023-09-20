import React, { useState, useContext } from "react";
import Button from "../../components/Button/Button";
import AxiosInstance from "../../api";
import { AppContext } from "../../context";
import { SAVE_TODO, SAVE_COMMENTS } from "../../context/types";
// import State from "../State/State";
import { useDispatch, useSelector } from "react-redux";
import store from "../../redux/store";

const ApiCalls = () => {
  //   const [todo, setTodo] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [commentLoading, setCommentLoading] = useState(false);

  //   const { todos } = useSelector((state) => state.todos);
  //   const dispatch = useDispatch();

  const { todosReducer } = store.getState();
  console.log(todosReducer);
  const getTodo = async () => {
    try {
      setLoading(true);
      const res = await AxiosInstance.get(`/todos/2`);

      setLoading(false);
      store.dispatch({ type: SAVE_TODO, data: res.data });
    } catch (err) {
      setLoading(false);

      setError(err.message);
    }
  };

  const getComments = async () => {
    try {
      setCommentLoading(true);
      const res = await AxiosInstance.get(`/comments`);

      setCommentLoading(false);

      //   dispatchData({ type: SAVE_COMMENTS, data: res.data });
    } catch (err) {
      setCommentLoading(false);

      setError(err.message);
    }
  };

  //   console.log(comments.length);

  return (
    <div>
      <Button
        text={`${loading ? "Loading..." : "Get todo"}`}
        onClick={getTodo}
      />
      {/* <p>{todo?.title}</p> */}
      {error && <p>{error}</p>}

      <Button
        text={`${commentLoading ? "Loading..." : "Get Comments"}`}
        onClick={getComments}
      />

      {/* {comments?.length > 0 &&
        comments?.map((comment, index) => <p key={index}>{comment}</p>)} */}
    </div>
  );
};

export default ApiCalls;
