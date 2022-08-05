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

export async function updateRecruiter(id, body, file) {
  const data = new FormData();
  console.log(file);
  data.append("company[name]", body?.name);
  if (file) data.append("company[logo]", file);
  data.append("company[description]", body?.description);
  data.append("company[website]", body?.website);

  console.log(data, "dataaaaaaaaaa");
  const options = {
    method: "PATCH",
    url: `${BASE_URI}/companies/${id}`,
    headers: {
      Authorization: `Token token=${sessionStorage.getItem(tokenKey)}`,
    },
    body: data,
    // {
    //   company: {
    //     name: body?.name || null,
    //     description: body?.description || null,
    //     website: body?.website || null,
    //   },
    // },
  };
  // const response = await axios.request(options);
  const response = await fetch(`${BASE_URI}/companies/${id}`, options);
  // const { token, ...user } = response.data;

  return response.data;
}
