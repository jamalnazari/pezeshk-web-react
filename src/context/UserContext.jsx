import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  // گرفتن لیست کاربران از API هنگام بارگذاری اولیه
  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error("خطا در گرفتن کاربران:", err));
  }, []);

  // افزودن کاربر جدید
  const addUser = async (user) => {
    try {
      const res = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const created = await res.json();
      setUsers(prev => [...prev, created]);
    } catch (err) {
      console.error("خطا در افزودن کاربر:", err);
    }
  };

  // ویرایش کاربر
  const editUser = async (index, updatedUser) => {
    try {
      const userId = users[index].id;
      const res = await fetch(`http://localhost:3001/users/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedUser),
      });
      const saved = await res.json();

      const newUsers = [...users];
      newUsers[index] = saved;
      setUsers(newUsers);
    } catch (err) {
      console.error("خطا در ویرایش کاربر:", err);
    }
  };

  // حذف کاربر
  const deleteUser = async (index) => {
    try {
      const userId = users[index].id;
      await fetch(`http://localhost:3001/users/${userId}`, { method: "DELETE" });

      const newUsers = users.filter((_, i) => i !== index);
      setUsers(newUsers);
    } catch (err) {
      console.error("خطا در حذف کاربر:", err);
    }
  };

  // مدیریت کاربر فعلی (login/logout)
  const loginUser = (user) => setCurrentUser(user);
  const logoutUser = () => setCurrentUser(null);

  return (
    <UserContext.Provider
      value={{ users, addUser, editUser, deleteUser, currentUser, loginUser, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};