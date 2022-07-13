import React from "react";
import { Outlet } from "react-router";

export function FindJob() {
  return (
    <>
      <h1>Find Job</h1>
      <Outlet />
    </>
  );
}
