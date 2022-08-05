import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, logout } from "./sessions/session-services";
import { getUser } from "./sessions/user-services";
import { useSingleEffect } from "react-haiku";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingView, setIsLoadingView] = useState(true);
  const navigate = useNavigate();

  useSingleEffect(() => {
    setIsLoadingView(true);
    setIsLoading(false);
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
  });
  useEffect(() => {
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
  }, [isLogin]);

  function handleLogin(credentials) {
    return login(credentials).then((user) => {
      setUser(user);
      setIsLogin(user);

      const route =
        user?.user_type === "Professional"
          ? "/dashboard/professional/find-job/all"
          : "/dashboard/recruiter/post-job/category/all";
      navigate(route);
    });
  }

  function handleLogout(credentials) {
    return logout().then((user) => {
      setUser(null);
      setIsLogin(false);
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
        isLogin,
        setIsLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
