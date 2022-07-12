import React from "react";
import { Outlet } from "react-router";

export function HomeView() {
  return (
    <>
      <h1>HomeView</h1>
      <Outlet />
    </>
  );
}
