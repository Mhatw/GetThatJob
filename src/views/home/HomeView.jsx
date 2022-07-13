import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export function HomeView() {
  return (
    <>
      <h1>HomeView</h1>
      <Link to="/dashboard/recruiter">dashboard-recruiter </Link>
      <Link to="/dashboard/professional">dashboard-professional</Link>
      <br />
      <Link to="login/recruiter">Login </Link>
      <Link to="signup/recruiter">signup </Link>
      <Outlet />
    </>
  );
}
