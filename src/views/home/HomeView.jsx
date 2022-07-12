import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export function HomeView() {
  return (
    <>
      <h1>HomeView</h1>
      <Link to="login/recruiter">Login </Link>
      <Link to="signup">signup </Link>
      <Outlet />
    </>
  );
}
