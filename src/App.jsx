import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Unauthorized from "./pages/Unauthorized";
import Login from "./pages/Login";
import UsersTable from "./components/Tables/UsersTable";
import Appointments from "./pages/Appointments";
import PatientForm from "./components/Forms/PatientForm";
import UserForm from "./components/Forms/UserForm";

function App() {
  return (
    <Router>
      <Routes>
        {/* صفحات عمومی */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* فقط سوپرادمین */}
        <Route
          path="/users"
          element={
            <ProtectedRoute allowedRoles={["superadmin"]}>
              <UsersTable />
            </ProtectedRoute>
          }
        />

        {/* فقط پذیرش و ادمین */}
        <Route
          path="/appointments"
          element={
            <ProtectedRoute allowedRoles={["admin", "reception"]}>
              <Appointments />
            </ProtectedRoute>
          }
        />

        {/* فقط کاربر اپ */}
        <Route
          path="/patient-form"
          element={
            <ProtectedRoute allowedRoles={["client"]}>
              <PatientForm />
            </ProtectedRoute>
          }
        />

        {/* صفحه unauthorized */}
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </Router>
  );
}

export default App;