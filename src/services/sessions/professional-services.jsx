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

export async function updateProfessional(id, body, cv) {
  const data = new FormData();
  console.log(cv);
  data.append("professional[name]", body?.name);
  data.append("professional[phone]", body?.phone);
  data.append("professional[experience]", body?.experience);
  data.append("professional[education]", body?.education);
  data.append("professional[birth_date]", body?.birth_date);

  if (cv) data.append("professional[cv]", cv);

  const options = {
    method: "PATCH",
    url: `${BASE_URI}/professionals/${id}`,
    headers: {
      Authorization: `Token token=${sessionStorage.getItem(tokenKey)}`,
    },
    body: data,
  };
  const response = await fetch(`${BASE_URI}/professionals/${id}`, options);
  // const response = await axios.request(options);
  // const { token, ...user } = response.data;

  return response.data;
}
