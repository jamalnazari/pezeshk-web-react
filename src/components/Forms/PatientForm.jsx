import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";

const PatientForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    nationalCode: "",
    birthDate: "",
    gender: "",
    maritalStatus: "",
    phone: "",
    email: "",
    insurance: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;  //Destructuring
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("اطلاعات ثبت شد:", formData);
    // Api رو به اینجا ارسال میکنم
  };

  return (
    <form className="container mt-4" onSubmit={handleSubmit}>
      <h4 className="mb-3">فرم پذیرش بیمار</h4>

      <div className="row">
        <div className="col-md-6">
          <Input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="نام بیمار"
          />
        </div>
        <div className="col-md-6">
          <Input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="نام خانوادگی"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <Input
            name="nationalCode"
            value={formData.nationalCode}
            onChange={handleChange}
            placeholder="کد ملی"
          />
        </div>
        <div className="col-md-6">
          <Input
            name="birthDate"
            type="date"
            value={formData.birthDate}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <select
            className="form-select mb-3"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">جنسیت</option>
            <option value="male">مرد</option>
            <option value="female">زن</option>
            <option value="other">سایر</option>
          </select>
        </div>
        <div className="col-md-6">
          <select
            className="form-select mb-3"
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
          >
            <option value="">وضعیت تأهل</option>
            <option value="single">مجرد</option>
            <option value="married">متأهل</option>
            <option value="divorced">طلاق گرفته</option>
            <option value="widowed">فوت همسر</option>
          </select>
        </div>
      </div>

      <Input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="شماره موبایل"
      />

      <Input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="ایمیل بیمار"
      />

      <Input
        name="insurance"
        value={formData.insurance}
        onChange={handleChange}
        placeholder="نام بیمه"
      />

      <Button type="submit" variant="success" size="lg">
        ثبت اطلاعات
      </Button>
    </form>
  );
};

export default PatientForm;