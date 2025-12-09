import React, { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Input from "../UI/Input";
import Button from "../UI/Button";

const LoginForm = () => {
  const { users, loginUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // بررسی وجود کاربر در لیست
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      loginUser(foundUser); // ✅ کاربر فعلی تنظیم می‌شود
      setToastMessage("ورود موفقیت‌آمیز ✅");
      setShowToast(true);
    } else {
      setToastMessage("ایمیل یا رمز عبور اشتباه است ❌");
      setShowToast(true);
    }
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">فرم ورود</h4>
      <form onSubmit={handleLogin}>
        <Input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ایمیل"
        />
        <Input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="رمز عبور"
        />
        <Button type="submit" variant="success">ورود</Button>
      </form>

      {/* Toast پیام */}
      {showToast && (
        <div className="toast-container position-fixed bottom-0 end-0 p-3">
          <div className="toast show bg-dark text-white">
            <div className="toast-body">
              {toastMessage}
              <button
                type="button"
                className="btn-close btn-close-white ms-2 float-end"
                onClick={() => setShowToast(false)}
              ></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;