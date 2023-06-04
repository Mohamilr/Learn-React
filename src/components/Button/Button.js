import React from "react";
import "./Button.css";

const Button = ({ text, otherClassName, onClick }) => {
  return (
    <button className={`btn ${otherClassName}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
