import  { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";

const Parvandeh = () => {
  const [recordData, setRecordData] = useState({
    patientId: "",
    recordDate: "",
    documentPath: "",
    description: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecordData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("پرونده ثبت شد:", recordData);
    // اینو به Api ارسال میکنم
  };

  return (
    <form className="container mt-4" onSubmit={handleSubmit}>
      <h4 className="mb-3">فرم تشکیل پرونده</h4>

      <Input
        name="patientId"
        value={recordData.patientId}
        onChange={handleChange}
        placeholder="کد بیمار"
      />

      <Input
        name="recordDate"
        type="date"
        value={recordData.recordDate}
        onChange={handleChange}
        placeholder="تاریخ تشکیل پرونده"
      />

      <Input
        name="documentPath"
        value={recordData.documentPath}
        onChange={handleChange}
        placeholder="مسیر فایل یا پوشه مدارک"
      />

      <Input
        name="description"
        value={recordData.description}
        onChange={handleChange}
        placeholder="توضیحات پرونده"
      />

      <select
        className="form-select mb-3"
        name="category"
        value={recordData.category}
        onChange={handleChange}
      >
        <option value="">دسته‌بندی پرونده</option>
        <option value="ct">سی‌تی اسکن</option>
        <option value="mri">ام‌آر‌آی</option>
        <option value="sonography">سونوگرافی</option>
        <option value="other">سایر</option>
      </select>

      <Button type="submit" variant="primary" size="lg">
        ثبت پرونده
      </Button>
    </form>
  );
};

export default Parvandeh;