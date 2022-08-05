import axios from "axios";
import { BASE_URI, tokenKey } from "./config";

export async function indexTypes() {
  const options = {
    method: "GET",
    url: `${BASE_URI}/types`,
    headers: {
      Authorization: `Token token=${sessionStorage.getItem(tokenKey)}`,
    },
  };
  const response = await axios.request(options);

  return response.data;
}
