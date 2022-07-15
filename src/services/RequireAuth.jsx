import { useToast } from "@chakra-ui/react";
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./auth";

export function RequireAuth({ children }) {
  const auth = useAuth();
  const toast = useToast();
  if (!auth.user) {
    toast({
      title: "Login required",
      description: "You must be logged in to view this page",
      status: "warning",
    });
    setTimeout(() => {
      toast.closeAll();
    }, 4000);
    return <Navigate to="/login/professional" />;
  }
  return children;
}
