import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
} from "../../redux/modules/analytics/analyticsSlice";

const State = () => {
  const [count, updateCount] = useState(0);
  const [showCount, toggleShowCount] = useState(true);
  const [condition, setCondition] = useState("okay");
  const [bookTitles, setBookTitles] = useState([
    "richest man in babylon",
    "think and grow rich",
    "the subtle art of not giving a fuck",
    "the power of habit",
  ]);

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  //   const input = document.querySelector(".input");

  console.log(counter);

  const inputRef = useRef(null);

  //   console.log(inputRef);

  useEffect(() => {
    updateCount(10);

    return () => {};
  }, [count]);

  const call = useCallback(() => {
    setCondition("hi");
    // eslint-disable-next-line
  }, [condition]);

  //   console.log("outside", condition);

  const filteredBook = useMemo(() => {
    return bookTitles.filter((bookTitle) => bookTitle?.length > 20);
  }, [bookTitles]);

  const handleBooksUpdate = () => {
    setBookTitles((prev) => [...prev, "purification of the soul"]);
  };

  return (
    <div>
      <Button text="Decrease" onClick={() => dispatch(decrement())} />
      <Button text="Increase" onClick={() => dispatch(increment())} />

      {/* {showCount &&}/ */}
      <p
        style={{
          color: "red",
          fontSize: "50px",
        }}
      >
        {count}
      </p>
      <Button
        text="Toggle Count Display"
        onClick={() => toggleShowCount((prev) => !prev)}
      />

      {/* <input type="text" ref={inputRef} defaultValue="this is good" /> */}

      <Input
        type="text"
        placeholder="type in here"
        name="Text"
        defaultValue="hello"
        ref={inputRef}
      />

      <Button text="CALL" onClick={call} />

      <Button text="add book" onClick={handleBooksUpdate} />
    </div>
  );
};

export default State;
