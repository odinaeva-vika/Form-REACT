import React from "react";
import "./Input.css";

function Input({ id, name, type, placeholder, className, onFocus, onBlur }) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      onFocus={onFocus}
      className={className}
      onBlur={onBlur}
    />
  );
}

export default Input;
