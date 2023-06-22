import React, { forwardRef } from "react";
import "./Input.css";

const Input = forwardRef(
  (
    {
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
    },
    ref
  ) => {
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
          ref={ref}
        />
        <span>{error}</span>
      </div>
    );
  }
);

export default Input;
