import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";

const NobatDehi = () => {
  const [appointment, setAppointment] = useState({
    patientName: "",
    doctorName: "",
    date: "",
    time: "",
  });

  const [appointments, setAppointments] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      appointment.patientName &&
      appointment.doctorName &&
      appointment.date &&
      appointment.time
    ) {
      setAppointments((prev) => [...prev, appointment]);
      setAppointment({ patientName: "", doctorName: "", date: "", time: "" });
    }
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">فرم نوبت‌دهی</h4>
      <form onSubmit={handleSubmit}>
        <Input
          name="patientName"
          value={appointment.patientName}
          onChange={handleChange}
          placeholder="نام بیمار"
        />
        <Input
          name="doctorName"
          value={appointment.doctorName}
          onChange={handleChange}
          placeholder="نام پزشک"
        />
        <Input
          name="date"
          type="date"
          value={appointment.date}
          onChange={handleChange}
        />
        <Input
          name="time"
          type="time"
          value={appointment.time}
          onChange={handleChange}
        />
        <Button type="submit" variant="primary">ثبت نوبت</Button>
      </form>

      {/* جدول نوبت‌ها */}
      <h4 className="mt-5 mb-3">لیست نوبت‌ها</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>نام بیمار</th>
            <th>نام پزشک</th>
            <th>تاریخ</th>
            <th>ساعت</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appt, i) => (
            <tr key={i}>
              <td>{appt.patientName}</td>
              <td>{appt.doctorName}</td>
              <td>{appt.date}</td>
              <td>{appt.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NobatDehi;