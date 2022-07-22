import axios from "axios";
import { BASE_URI, tokenKey } from "./config";

export async function getUser() {
  const options = {
    method: "GET",
    url: `${BASE_URI}/profile`,
    headers: {
      Authorization: `Token token=${sessionStorage.getItem(tokenKey)}`,
    },
  };
  const response = await axios.request(options);
  const { ...user } = response.data;
  // sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function signupProfessional(userableId, body) {
  const options = {
    method: "POST",
    url: `${BASE_URI}/professionals/${userableId}/signup`,
    headers: { "Content-Type": "application/json" },
    data: {
      user: {
        email: body.email,
        password: body.password,
        password_confirmation: body.password_confirmation,
      },
    },
  };
  const response = await axios.request(options);
  const { token, ...user } = response.data;
  sessionStorage.setItem(tokenKey, token);
  return user;
}
export async function signupRecruiter(userableId, body) {
  const options = {
    method: "POST",
    url: `${BASE_URI}/companies/${userableId}/signup`,
    headers: { "Content-Type": "application/json" },
    data: {
      user: {
        email: body.email,
        password: body.password,
        password_confirmation: body.password_confirmation,
      },
    },
  };
  const response = await axios.request(options);
  const { token, ...user } = response.data;
  sessionStorage.setItem(tokenKey, token);
  return user;
}
