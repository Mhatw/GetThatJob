import React from "react";
import { Outlet } from "react-router";
import { useAuth } from "../../services/auth";

export function DashboardView() {
  const auth = useAuth();
  const handleLogout = (e) => {
    auth.logout();
    // navigate("/dashboard");
  };
  return (
    <>
      <h1>DashboardView</h1>
      <button onClick={handleLogout}>Logout</button>
      <Outlet />
    </>
  );
}
