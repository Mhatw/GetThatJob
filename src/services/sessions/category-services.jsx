import axios from "axios";
import { tokenKey } from "./config";

export async function indexCategories() {
  const options = {
    method: "GET",
    url: "https://get-that-jobs-api.herokuapp.com/categories",
    headers: {
      Authorization: `Token token=${sessionStorage.getItem(tokenKey)}`,
    },
  };
  const response = await axios.request(options);
  console.log(response.data);
  // const { token, ...user } = response.data;

  return response.data;
}
