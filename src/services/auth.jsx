import { createContext, useContext, useState } from "react";
import axios from "axios";
import { tokenKey, BASE_URI } from "./sessions/config";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (credentials) => {
    const options = {
      method: "POST",
      url: `${BASE_URI}/login`,
      headers: { "Content-Type": "application/json" },
      data: credentials,
    };
    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
        sessionStorage.setItem(tokenKey, response.data.token);
        return response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // setUser(user);
  const logout = () => {
    setUser(null);
    localStorage.removeItem(tokenKey);
    const options = {
      method: "DELETE",
      url: `${BASE_URI}/logout`,
      headers: {
        Authorization: `Token token=${sessionStorage.getItem(tokenKey)}`,
      },
    };
    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        sessionStorage.removeItem(tokenKey);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
