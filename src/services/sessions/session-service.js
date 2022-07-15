import apiFetch from "../api-fetch";
import axios from "axios";
import { tokenKey } from "./config";

export const login = (credentials) => {
  const options = {
    method: "POST",
    url: "https://get-that-jobs-api.herokuapp.com/login",
    headers: { "Content-Type": "application/json" },
    data: credentials,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      localStorage.setItem(tokenKey, response.data.token);
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
};

export async function logout() {
  try {
    const data = await apiFetch("logout", { method: "POST" });
    sessionStorage.removeItem(tokenKey);
    return data;
  } catch (error) {
    console.log(error);
  }
}
