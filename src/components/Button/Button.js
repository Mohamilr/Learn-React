import React from "react";
import "./Button.css";

const Button = ({ type, text, otherClassName, onClick }) => {
  return (
    <button type={type} className={`btn ${otherClassName}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
