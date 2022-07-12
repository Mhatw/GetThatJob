import React from "react";
import { Outlet } from "react-router";

export function DashboardView() {
  return (
    <>
      <h1>DashboardView</h1>
      <Outlet />
    </>
  );
}
