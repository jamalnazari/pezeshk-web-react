import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null); //  کاربر فعلی

  // مدیریت لیست کاربران
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