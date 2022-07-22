import axios from "axios";
import { BASE_URI, tokenKey } from "./config";

export async function indexApplications() {
  const options = {
    method: "GET",
    url: `${BASE_URI}/applications`,
    headers: {
      Authorization: `Token token=${sessionStorage.getItem(tokenKey)}`,
    },
  };
  const response = await axios.request(options);
  // const { token, ...user } = response.data;

  return response.data;
}

export async function createApplications(app) {
  const options = {
    method: "POST",
    url: `${BASE_URI}/applications`,
    headers: {
      Authorization: `Token token=${sessionStorage.getItem(tokenKey)}`,
      "Content-Type": "application/json",
    },
    data: app,
  };
  const response = await axios.request(options);
  // const { token, ...user } = response.data;

  return response.data;
}
