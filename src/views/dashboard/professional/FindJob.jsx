import React from "react";
import { Outlet, useNavigate } from "react-router";
import { useSingleEffect } from "react-haiku";
export function FindJob() {
  let navigate = useNavigate();

  useSingleEffect(() => {
    navigate("/dashboard/professional/find-job/all");
  });
  return (
    <>
      <Outlet />
    </>
  );
}
