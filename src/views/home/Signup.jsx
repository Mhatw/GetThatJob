import React from "react";
import { Link, Outlet } from "react-router-dom";

export function Signup() {
  return (
    <>
      <h1>Signup</h1>
      <Link to="recruiter">recruiter </Link>
      <Link to="professional">professional </Link>
      <Outlet />
    </>
  );
}
