import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, logout } from "./sessions/session-services";
import { getUser } from "./sessions/user-services";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingView, setIsLoadingView] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoadingView(true);
    getUser()
      .then((res) => {
        setUser(res);
        setIsLoadingView(false);
      })
      .catch((error) => {
        console.log(error);
        setUser(null);
        setIsLoadingView(false);
      });

    console.log("useEffect");
  }, []);

  function handleLogin(credentials) {
    console.log("validating credentials");
    console.log("user-pre", user);
    return login(credentials).then((user) => {
      setUser(user);
      console.log("user", user?.user_type);
      const route =
        user?.user_type === "Professional"
          ? "/dashboard/professional/find-job/all"
          : "/dashboard/recruiter";
      navigate(route);
    });
  }

  function handleLogout(credentials) {
    console.log("logout");
    return logout().then((user) => {
      setUser(null);
      navigate("/");
    });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: handleLogin,
        logout: handleLogout,
        isLoading,
        setIsLoading,
        isLoadingView,
        setIsLoadingView,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
