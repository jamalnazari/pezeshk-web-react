import React, { createContext, useEffect, useState } from "react";

// ایجاد context
export const UserContext = createContext();

// Provider برای مدیریت کاربران
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers((prev) => [...prev, { ...user, active: true }]);
  };

 const editUser = (index, updatedUser) => {
  const updatedUsers = [...users];
  updatedUsers[index] = updatedUser;
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