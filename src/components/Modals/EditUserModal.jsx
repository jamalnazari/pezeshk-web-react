import React, { useState, useEffect } from "react";
import Button from "../UI/Button";

const EditUserModal = ({ show, onClose, user, onSave }) => {
  const [formData, setFormData] = useState(user);

  useEffect(() => {
    setFormData(user);
  }, [user]);

  if (!show) return null; // اگر مودال بسته باشد چیزی نمایش نده

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content p-4">
        <h4 className="mb-3">ویرایش کاربر</h4>
        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-2"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="نام"
          />
          <input
            className="form-control mb-2"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ایمیل"
          />
          <input
            className="form-control mb-2"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="تلفن"
          />
          <select
            className="form-select mb-3"
            name="userType"
            value={formData.userType}
            onChange={handleChange}
          >
            <option value="superadmin">سوپرادمین</option>
            <option value="admin">ادمین</option>
            <option value="reception">پذیرش</option>
            <option value="client">کاربر اپ</option>
          </select>
          <Button type="submit" variant="primary">ذخیره تغییرات</Button>{" "}
          <Button variant="secondary" onClick={onClose}>انصراف</Button>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;