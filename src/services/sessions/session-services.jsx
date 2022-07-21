import { BASE_URI, tokenKey } from "./config";
import axios from "axios";

export async function login(credentials) {
  const options = {
    method: "POST",
    url: `${BASE_URI}/login`,
    headers: { "Content-Type": "application/json" },
    data: credentials,
  };
  const response = await axios.request(options);
  console.log(response);
  const { token, ...user } = response.data;
  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function logout() {
  const options = {
    method: "DELETE",
    url: `${BASE_URI}/logout`,
    headers: {
      Authorization: `Token token=${sessionStorage.getItem(tokenKey)}`,
    },
  };
  const response = await axios.request(options);
  console.log(response);
  sessionStorage.removeItem(tokenKey);
  return response.data;
}
