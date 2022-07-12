import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <>
      <h1>Login</h1>
      <Link to="recruiter">recruiter </Link>
      <Link to="professional">professional </Link>
      <Outlet />
    </>
  );
}
