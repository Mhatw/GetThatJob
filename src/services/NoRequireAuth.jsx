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
    const route =
      auth?.user?.user_type === "Professional"
        ? "/dashboard/professional/find-job/all"
        : "/dashboard/recruiter/post-job/category/all";

    return <Navigate to={route} />;
  }
  return auth.isLoadingView ? loaderView : children;
}
