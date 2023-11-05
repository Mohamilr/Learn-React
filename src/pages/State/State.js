import React from "react";
import Button from "../../components/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../../redux-toolkit/counterSlice/counterSlice";
import { useGetCommentsQuery } from "../../api/redux-toolkit-api";

const State = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  console.log(count);

  const { data, error, isLoading } = useGetCommentsQuery();

  console.log("comments ", data);

  const comments = useSelector((state) => state.typicode);

  console.log("redux comments data", comments);
  return (
    <div>
      <Button text="Decrease" onClick={() => dispatch(decrement())} />
      <div></div>
      <Button text="Increase" onClick={() => dispatch(increment())} />

      <Button
        text="Increase By a number"
        onClick={() => dispatch(incrementByAmount(5))}
      />

      <p>{count}</p>
    </div>
  );
};

export default State;
