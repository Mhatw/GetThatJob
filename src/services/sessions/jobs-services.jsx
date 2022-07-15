import axios from "axios";

export async function indexJobs() {
  const options = {
    method: "GET",
    url: "https://get-that-jobs-api.herokuapp.com//jobs",
    headers: { Authorization: "Token token=T8ohvDaK9by7WtPMthF9u7Kg" },
  };
  const response = await axios.request(options);
  console.log(response);
  // const { token, ...user } = response.data;

  // return user;
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
