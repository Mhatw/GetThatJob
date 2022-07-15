import axios from "axios";
import { tokenKey } from "./config";

export async function indexJobs() {
  const options = {
    method: "GET",
    url: "https://get-that-jobs-api.herokuapp.com/jobs",
    headers: {
      Authorization: `Token token=${sessionStorage.getItem(tokenKey)}`,
    },
  };
  const response = await axios.request(options);
  console.log(response.data);
  // const { token, ...user } = response.data;

  return response.data;
}

// const options = {
//   method: 'GET',
//   url: 'https://get-that-jobs-api.herokuapp.com//jobs',
//   headers: {Authorization: 'Token token=T8ohvDaK9by7WtPMthF9u7Kg'}
// };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });
