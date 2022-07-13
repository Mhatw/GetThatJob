import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export function Recruiter() {
  return (
    <>
      <h1>Recruiter</h1>
      <Link to="post-job">post-job</Link>
      <Link to="create-job">create-job</Link>
      <Link to="profile">profile</Link>
      <Outlet />
    </>
  );
}
