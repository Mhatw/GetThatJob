import { BASE_URI, tokenKey } from "./config";
import axios from "axios";

export async function createRecruiter(body) {
  const options = {
    method: "POST",
    url: `${BASE_URI}/companies`,
    headers: { "Content-Type": "application/json" },
    data: {
      company: {
        name: body?.name || null,
        description: body?.description || null,
        website: body?.website || null,
      },
    },
  };
  const response = await axios.request(options);
  // const { token, ...user } = response.data;

  return response.data;
}

export async function updateRecruiter(id, body) {
  const options = {
    method: "PATCH",
    url: `${BASE_URI}/companies/${id}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token token=${sessionStorage.getItem(tokenKey)}`,
    },
    data: {
      company: {
        name: body?.name || null,
        description: body?.description || null,
        website: body?.website || null,
      },
    },
  };
  const response = await axios.request(options);
  // const { token, ...user } = response.data;

  return response.data;
}
