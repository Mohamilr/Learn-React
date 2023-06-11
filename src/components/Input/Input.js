import React from "react";
import "./Input.css";

const Input = ({
  type,
  placeholder,
  name,
  id,
  label,
  value,
  required,
  disabled,
  defaultValue,
  autoComplete,
  autoFocus,
  onChange,
  error,
}) => {
  return (
    <div className="input__group">
      <label htmlFor={id} className="input__label">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        required={required}
        disabled={disabled}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        className="input"
      />
      <span>{error}</span>
    </div>
  );
};

export default Input;
