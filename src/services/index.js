import axios from "axios";
import UsersService from "./users";

const baseURL = "https://controleatendimentos.herokuapp.com/api";

export async function requestApi(url, type, data = "") {
  // const token = "";
  const response = await new Promise((resolve) => {
    axios({
      method: type,
      url: baseURL + url,
      data: data,
      // headers: {
      //   Authorization: "Bearer " + token,
      // },
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        resolve(error);
      });
  });
  return responseData(response);
}

function responseData(response) {
  let menssage = null;
  if (!response.data) {
    menssage = {
      status: response.request.status,
      statusText: response.request.statusText,
    };
  }
  return {
    data: response.data,
    menssage,
  };
}

export default {
  users: UsersService(),
};
