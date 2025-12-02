import React from "react";

const Card = ({ title, children, className = "", style = {} }) => {
  return (
    <div className={`card ${className}`} style={style}>
      {title && <div className="card-header">{title}</div>}
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;