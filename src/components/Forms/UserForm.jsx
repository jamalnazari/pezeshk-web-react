import React, { useState, useContext } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { UserContext } from "../../context/UserContext";

const UserForm = () => {
  const { addUser } = useContext(UserContext);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    userType: "",
  });
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!userData.name || !userData.email || !userData.phone || !userData.password  || !userData.userType) {
      setToastMessage("لطفاً همه فیلدها را پر کنید ❌");
      setShowToast(true);
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(userData.email)) {
      setToastMessage("ایمیل معتبر نیست ❌");
      setShowToast(true);
      return false;
    }

    if (!/^\d{10,11}$/.test(userData.phone)) {
      setToastMessage("شماره تلفن باید فقط عدد و 10 یا 11 رقم باشد ❌");
      setShowToast(true);
      return false;
    }

    if (userData.password.length < 6) {
      setToastMessage("رمز عبور باید حداقل 6 کاراکتر باشد ❌");
      setShowToast(true);
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const newUser = { ...userData, id: Date.now(), active: true };
    addUser(newUser);

    setToastMessage("کاربر با موفقیت ثبت شد ✅");
    setShowToast(true);

    setUserData({ name: "", email: "", phone: "", password: "", userType: "" });
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">فرم ثبت‌نام کاربر</h4>
      <form onSubmit={handleSubmit}>
        <Input name="name" value={userData.name} onChange={handleChange} placeholder="نام کاربر" />
        <Input name="email" type="email" value={userData.email} onChange={handleChange} placeholder="ایمیل" />
        <Input name="phone" value={userData.phone} onChange={handleChange} placeholder="شماره تلفن" />
        <Input name="password" type="password" value={userData.password} onChange={handleChange} placeholder="رمز عبور" />
        <select className="form-select mb-3" name="userType" value={userData.userType} onChange={handleChange}>
          <option value="">نوع کاربر</option>
          <option value="superadmin">سوپرادمین</option>
          <option value="admin">ادمین</option>
          <option value="reception">پذیرش</option>
          <option value="client">کاربر اپ</option>
        </select>
        <Button type="submit" variant="primary">ثبت کاربر</Button>
      </form>

      {/* Toast پیام */}
      {showToast && (
        <div className="toast-container position-fixed bottom-0 end-0 p-3">
          <div className="toast show bg-dark text-white">
            <div className="toast-body">
              {toastMessage}
              <button type="button" className="btn-close btn-close-white ms-2 float-end" onClick={() => setShowToast(false)}></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserForm;