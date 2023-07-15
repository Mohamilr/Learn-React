import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import AxiosInstance from "../../api";

const ApiCalls = () => {
  const [todo, setTodo] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [todoId, setTodoId] = useState(1);

  const handleApiCall = async () => {
    // AXIOS
    try {
      setLoading(true);
      const res = await AxiosInstance.get(`/todos/${todoId}`);

      console.log(res.data);
      setTodoId((prev) => prev + 1);
      setLoading(false);
    } catch (err) {
      setLoading(false);

      setError(err.message);
    }

    // FETCH
    // try {
    //   setLoading(true);
    //   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    //     method: "GET",
    //   });

    //   const response = await res.json();
    //   console.log(response);
    //   setLoading(false);
    // } catch (e) {
    //   setLoading(false);
    //   setError(e.message);
    // }

    // fetch("https://jsonplaceholder.typicode.com/todos/1", {
    //   method: "GET",
    // })
    //   .then((res) => res.json())
    //   .then((res) => setTodo(res))
    //   .catch((e) => {
    //     setError(e.message);
    //   });
  };

  return (
    <div>
      <Button
        text={`${loading ? "Loading..." : "Make api call"}`}
        onClick={handleApiCall}
      />
      <p>{todo?.title}</p>
      {error && <p>{error}</p>}
    </div>
  );
};

export default ApiCalls;
