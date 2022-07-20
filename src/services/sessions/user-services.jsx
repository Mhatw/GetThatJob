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
  console.log(response);
  const { ...user } = response.data;
  // sessionStorage.setItem(tokenKey, token);
  return user;
}
