import React from "react";

const Unauthorized = () => {
  return (
    <div className="container mt-5 text-center">
      <h2 className="text-danger mb-3">دسترسی غیرمجاز 🚫</h2>
      <p className="lead">
        شما اجازه دسترسی به این صفحه را ندارید.
      </p>
      <p className="text-muted">
        لطفاً با مدیر سیستم تماس بگیرید یا به صفحه داشبورد بازگردید.
      </p>
      <a href="/dashboard" className="btn btn-primary mt-3">
        بازگشت به داشبورد
      </a>
    </div>
  );
};

export default Unauthorized;