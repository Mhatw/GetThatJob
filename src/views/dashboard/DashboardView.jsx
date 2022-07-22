import React from "react";
import { Outlet } from "react-router";

export function DashboardView() {
  return (
    <>
      <Outlet />
    </>
  );
}
