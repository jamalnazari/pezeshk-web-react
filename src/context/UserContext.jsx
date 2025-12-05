import React, { createContext, useEffect, useState } from "react";

// ایجاد context
export const UserContext = createContext();

// Provider برای مدیریت کاربران
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers((prev) => [...prev, { ...user, active: true }]);
  };

  const editUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers[index].name = prompt("نام جدید:", updatedUsers[index].name);
    updatedUsers[index].email = prompt("ایمیل جدید:", updatedUsers[index].email);
    updatedUsers[index].phone = prompt("تلفن جدید:", updatedUsers[index].phone);
    setUsers(updatedUsers);
  };

  const deleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <UserContext.Provider value={{ users, addUser, editUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};