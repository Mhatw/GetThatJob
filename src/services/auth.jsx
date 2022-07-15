import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { tokenKey, BASE_URI } from "./sessions/config";
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
    return login(credentials).then((user) => {
      setUser(user);
      navigate("/dashboard");
    });
  }
  // const login = (credentials) => {
  //   const options = {
  //     method: "POST",
  //     url: `${BASE_URI}/login`,
  //     headers: { "Content-Type": "application/json" },
  //     data: credentials,
  //   };
  //   axios
  //     .request(options)
  //     .then((response) => {
  //       console.log(response.data);
  //       setUser(response.data);
  //       sessionStorage.setItem(tokenKey, response.data.token);
  //       return response.data;
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  // setUser(user);
  function handleLogout(credentials) {
    console.log("logout");
    return logout().then((user) => {
      setUser(null);
      navigate("/");
    });
  }
  // const handleLogout = () => {
  //   setUser(null);
  //   logout()
  // const options = {
  //   method: "DELETE",
  //   url: `${BASE_URI}/logout`,
  //   headers: {
  //     Authorization: `Token token=${sessionStorage.getItem(tokenKey)}`,
  //   },
  // };
  // axios
  //   .request(options)
  //   .then((response) => {
  //     console.log(response.data);
  //     sessionStorage.removeItem(tokenKey);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  // };

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
