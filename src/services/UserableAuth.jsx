import { useLocation } from "react-router-dom";
import { useAuth } from "./auth";

export function UserableAuth({ children }) {
  const auth = useAuth();
  // const toast = useToast();
  let location = useLocation();
  const typeUser =
    auth.user?.type_user === "Professional" ? "professional" : "recruiter";
  console.log(typeUser);
  console.log(location.pathname.match(`dashboard/${typeUser}`));
  return children;
}
