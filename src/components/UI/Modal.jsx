import React from "react";

const Modal = ({ show, onClose, title, children }) => {
  if (!show) return null;

  return (
    <div className="modal show d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          {title && <div className="modal-header"><h5 className="modal-title">{title}</h5></div>}
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>بستن</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;