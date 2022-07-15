import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, logout } from "./sessions/session-services";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   // getUser()
  //   //   .then(setUser)
  //   //   .catch((error) => console.log(error));
  //   console.log("useEffect");
  // }, []);

  function handleLogin(credentials) {
    console.log("validating credentials");
    console.log("user-pre", user);
    return login(credentials).then((user) => {
      setUser(user);
      console.log("user", user?.user_type);
      const route =
        user?.user_type === "Professional"
          ? "/dashboard/professional"
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
        login: handleLogin,
        logout: handleLogout,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
