import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export function Professional() {
  return (
    <>
      <h1>Professional</h1>
      <Link to="find-job/all">Find Job</Link>
      <br />
      <Link to="applies/all">Your applications</Link>
      <br />
      <Link to="following">following</Link>
      <br />
      <Link to="profile">profile</Link>
      <Outlet />
    </>
  );
}
