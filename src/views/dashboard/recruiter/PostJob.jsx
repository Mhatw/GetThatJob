import React from "react";
import { Outlet } from "react-router";
// import { Link } from "react-router-dom";

export function PostJob() {
  return (
    <>
      {/* <h1>PostJob</h1> */}
      {/* <Link to="category/all">category</Link>
      <Link to="show/12">Show Job</Link> */}
      <Outlet />
    </>
  );
}
