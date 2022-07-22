import { BASE_URI, tokenKey } from "./config";
import axios from "axios";

export async function createProfessional(body) {
  const options = {
    method: "POST",
    url: `${BASE_URI}/professionals`,
    headers: { "Content-Type": "application/json" },
    data: {
      professional: {
        name: body?.name || null,
        phone: body?.phone || null,
        experience: body?.experience || null,
        education: body?.education || null,
        birth_date: body?.birth_date || null,
        profession_id: body?.profession_id || null,
      },
    },
  };
  const response = await axios.request(options);
  // const { token, ...user } = response.data;

  return response.data;
}

export async function updateProfessional(id, body) {
  const options = {
    method: "PATCH",
    url: `${BASE_URI}/professionals/${id}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token token=${sessionStorage.getItem(tokenKey)}`,
    },
    data: {
      professional: {
        name: body?.name || null,
        phone: body?.phone || null,
        experience: body?.experience || null,
        education: body?.education || null,
        birth_date: body?.birth_date || null,
        profession_id: body?.profession_id || 1,
      },
    },
  };
  const response = await axios.request(options);
  // const { token, ...user } = response.data;

  return response.data;
}
