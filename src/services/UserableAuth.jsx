import { Navigate, useLocation } from "react-router-dom";
import { loaderView } from "../components/Loaders";
import { useAuth } from "./auth";

export function UserableAuth({ children }) {
  const auth = useAuth();

  let location = useLocation();
  const typeUser =
    auth.user?.user_type === "Professional" ||
    auth.user?.type_user === "Professional"
      ? "professional"
      : "recruiter";

  if (
    !location.pathname.match(`dashboard/${typeUser}`) &&
    !auth.isLoadingView
  ) {
    const route =
      auth?.user?.user_type === "Professional"
        ? "/dashboard/professional/find-job/all"
        : "/dashboard/recruiter/post-job/category/all";

    return <Navigate to={route} />;
  }

  return auth.isLoadingView ? loaderView : children;
}
