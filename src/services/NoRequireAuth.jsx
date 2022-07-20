import { Navigate, useLocation } from "react-router-dom";
import { loaderView } from "../components/Loaders";
import { useAuth } from "./auth";

export function NoRequireAuth({ children }) {
  const auth = useAuth();
  let location = useLocation();

  if (
    auth.user &&
    location.pathname !== "/dashboard/professional/find-job/all"
  ) {
    return <Navigate to="/dashboard/professional/find-job/all" />;
  }
  return auth.isLoadingView ? loaderView : children;
}
