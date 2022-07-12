import React from "react";
import { Outlet } from "react-router";

export function Login() {
  return (
    <>
      <h1>Login</h1>
      <Outlet />
    </>
  );
}
