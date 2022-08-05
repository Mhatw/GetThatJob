import axios from "axios";
import { BASE_URI, tokenKey } from "./config";

export async function followJob(id) {
  const options = {
    method: "POST",
    url: `${BASE_URI}/followings`,
    headers: {
      Authorization: `Token token=${sessionStorage.getItem(tokenKey)}`,
      "Content-Type": "application/json",
    },
    data: { following: { job_id: id } },
  };
  const response = await axios.request(options);

  return response.data;
}
export async function unfollowJob(id) {
  const options = {
    method: "DELETE",
    url: `${BASE_URI}/followings/${parseInt(id)}`,
    headers: {
      Authorization: `Token token=${sessionStorage.getItem(tokenKey)}`,
    },
  };
  const response = await axios.request(options);

  return response.data;
}

export async function indexfollow() {
  const options = {
    method: "GET",
    url: `${BASE_URI}/followings`,
    headers: {
      Authorization: `Token token=${sessionStorage.getItem(tokenKey)}`,
    },
  };
  const response = await axios.request(options);

  return response.data;
}
