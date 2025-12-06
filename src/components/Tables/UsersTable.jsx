import React, { useContext, useState } from "react";
import Button from "../UI/Button";
import { UserContext } from "../../context/UserContext";
import EditUserModal from "../Modals/EditUserModal";

const UsersTable = () => {
  const { users, editUser, deleteUser } = useContext(UserContext);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleEdit = (user, index) => {
    setSelectedUser({ ...user, index });
    setShowModal(true);
  };

  const handleSave = (updatedUser) => {
    editUser(selectedUser.index, updatedUser); // هماهنگ با Context
    setShowModal(false);
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-3">لیست کاربران</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>نام</th>
            <th>ایمیل</th>
            <th>تلفن</th>
            <th>نوع کاربر</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center">هیچ کاربری ثبت نشده است</td>
            </tr>
          ) : (
            users.map((user, i) => (
              <tr key={user.id || i}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.userType}</td>
                <td>{user.active ? "فعال" : "غیرفعال"}</td>
                <td>
                  <Button variant="warning" size="sm" onClick={() => handleEdit(user, i)}>ویرایش</Button>{" "}
                  <Button variant="danger" size="sm" onClick={() => deleteUser(i)}>حذف</Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* مودال ویرایش */}
      {selectedUser && (
        <EditUserModal
          show={showModal}
          onClose={() => setShowModal(false)}
          user={selectedUser}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default UsersTable;