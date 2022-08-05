import axios from "axios";
import { BASE_URI, tokenKey } from "./config";

export async function indexJobs() {
  const options = {
    method: "GET",
    url: `${BASE_URI}/jobs`,
    headers: {
      Authorization: `Token token=${sessionStorage.getItem(tokenKey)}`,
    },
  };
  const response = await axios.request(options);

  return response.data.reverse();
}
export async function indexReloadedJobs() {
  const options = {
    method: "GET",
    url: `${BASE_URI}/reloaded_jobs`,
    headers: {
      Authorization: `Token token=${sessionStorage.getItem(tokenKey)}`,
    },
  };
  const response = await axios.request(options);

  return response.data.reverse();
}

export async function createJob(body) {
  const options = {
    method: "POST",
    url: `${BASE_URI}/jobs`,
    headers: {
      Authorization: `Token token=${sessionStorage.getItem(tokenKey)}`,
      "Content-Type": "application/json",
    },
    data: {
      job: {
        name: body.name,
        description: body.description,
        type_id: parseInt(body.type_id),
        category_id: parseInt(body.category_id),
        salary_min: parseInt(body.salary_min),
        salary_max: parseInt(body.salary_max),
      },
    },
  };
  const response = await axios.request(options);

  return response.data;
}
