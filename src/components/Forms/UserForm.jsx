import React, { useState, useContext } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { UserContext } from "../../context/UserContext";

const UserForm = () => {
  const { addUser , users } = useContext(UserContext);
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


  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(userData);
    console.log(userData)
    setUserData({ name: "", email: "", phone: "", password: "", userType: "" });
    console.log(users);
    
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