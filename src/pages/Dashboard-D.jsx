import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Dashboard = () => {
  const { currentUser, users } = useContext(UserContext);

  if (!currentUser) {
    return (
      <div className="container mt-5 text-center">
        <h3>لطفاً وارد شوید</h3>
        <p>برای مشاهده داشبورد باید ابتدا لاگین کنید.</p>
      </div>
    );
  }

  // نمونه داده‌های فرضی برای آمار
  const appointmentsToday = 12;
  const activePatients = 34;
  const activeUsers = users.filter((u) => u.active).length;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">داشبورد</h2>
      <p className="lead">
        خوش آمدید {currentUser.name} 👋 ({currentUser.userType})
      </p>

      {/* کارت‌های خلاصه وضعیت */}
      <div className="row mb-4">
        {["superadmin", "admin"].includes(currentUser.userType) && (
          <div className="col-md-4">
            <div className="card text-bg-danger mb-3">
              <div className="card-body">
                <h5 className="card-title">کاربران فعال</h5>
                <p className="card-text fs-4">{activeUsers}</p>
              </div>
            </div>
          </div>
        )}

        {["admin", "reception"].includes(currentUser.userType) && (
          <div className="col-md-4">
            <div className="card text-bg-success mb-3">
              <div className="card-body">
                <h5 className="card-title">نوبت‌های امروز</h5>
                <p className="card-text fs-4">{appointmentsToday}</p>
              </div>
            </div>
          </div>
        )}

        {["admin", "client"].includes(currentUser.userType) && (
          <div className="col-md-4">
            <div className="card text-bg-info mb-3">
              <div className="card-body">
                <h5 className="card-title">بیماران فعال</h5>
                <p className="card-text fs-4">{activePatients}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* دکمه‌های نقش‌محور */}
      {currentUser.userType === "superadmin" && (
        <div>
          <h4>مدیریت کل سیستم</h4>
          <a href="/users" className="btn btn-danger me-2">
            مدیریت کاربران
          </a>
          <a href="/reports" className="btn btn-warning">
            گزارش‌ها
          </a>
        </div>
      )}

      {currentUser.userType === "admin" && (
        <div>
          <h4>مدیریت مطب</h4>
          <a href="/appointments" className="btn btn-success me-2">
            مدیریت نوبت‌ها
          </a>
          <a href="/patient-form" className="btn btn-primary">
            پذیرش بیمار
          </a>
        </div>
      )}

      {currentUser.userType === "reception" && (
        <div>
          <h4>پذیرش</h4>
          <a href="/appointments" className="btn btn-success me-2">
            نوبت‌های امروز
          </a>
          <a href="/patient-form" className="btn btn-primary">
            پذیرش بیمار
          </a>
        </div>
      )}

      {currentUser.userType === "client" && (
        <div>
          <h4>پنل بیمار</h4>
          <a href="/patient-form" className="btn btn-info">
            ثبت اطلاعات پزشکی
          </a>
          <a href="/appointments" className="btn btn-success mt-2">
            مشاهده نوبت‌ها
          </a>
        </div>
      )}
    </div>
  );
};

export default Dashboard;