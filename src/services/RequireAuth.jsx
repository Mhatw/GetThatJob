import { useToast } from "@chakra-ui/react";
import { Navigate, useLocation } from "react-router-dom";
import { loaderView } from "../components/Loaders";
import { useAuth } from "./auth";

export function RequireAuth({ children }) {
  const auth = useAuth();
  const toast = useToast();
  let location = useLocation();
  if (
    !auth.user &&
    !auth.isLoadingView &&
    location.pathname !== "/login/professional"
  ) {
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
  return auth.isLoadingView ? loaderView : children;
}
