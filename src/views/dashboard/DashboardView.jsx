import React from "react";
import { Outlet, useNavigate } from "react-router";
import { useSingleEffect } from "react-haiku";
import { useAuth } from "../../services/auth";

export function DashboardView() {
  const auth = useAuth();
  const navigate = useNavigate();
  const route =
    auth?.user?.user_type === "Professional"
      ? "/dashboard/professional/find-job/all"
      : "/dashboard/recruiter/post-job/category/all";
  useSingleEffect(() => {
    navigate(route);
  });
  return (
    <>
      <Outlet />
    </>
  );
}
