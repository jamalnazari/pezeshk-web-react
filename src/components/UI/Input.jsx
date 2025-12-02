import React from "react";

const Input = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  className = "",
  style = {},
  name = ""   
}) => {
  return (
    <div className="mb-3">
      {label && <label className="form-label">{label}</label>}
      <input
        type={type}
        name={name}                
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`form-control ${className}`}
        style={style}
      />
    </div>
  );
};

export default Input;