import React from "react";

const Button = ({
  children,
  type = "button",
  variant = "primary", // رنگ: primary, success, danger...
  size = "md",         // اندازه: sm, md, lg
  className = "",
  style = {},
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant} btn-${size} ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;