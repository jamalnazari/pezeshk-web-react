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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!userData.name || !userData.email || !userData.phone || !userData.password || !userData.userType) {
      alert("لطفاً همه فیلدها را پر کنید");
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(userData.email)) {
      alert("ایمیل معتبر نیست");
      return false;
    }

    if (!/^\d{10,11}$/.test(userData.phone)) {
      alert("شماره تلفن باید فقط عدد و 10 یا 11 رقم باشد");
      return false;
    }

    if (userData.password.length < 6) {
      alert("رمز عبور باید حداقل 6 کاراکتر باشد");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // اضافه کردن شناسه یکتا
    const newUser = { ...userData, id: Date.now(), active: true };

    addUser(newUser);
    alert("کاربر با موفقیت ثبت شد ✅");

    // پاک کردن فرم
    setUserData({ name: "", email: "", phone: "", password: "", userType: "" });
  };

  return (
    <form className="container mt-4" onSubmit={handleSubmit}>
      <h4 className="mb-3">فرم ثبت‌نام کاربر</h4>
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
  );
};

export default UserForm;