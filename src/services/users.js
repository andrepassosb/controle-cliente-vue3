import { requestApi } from ".";

export default () => ({
  getAllUsers: () => {
    const url = "/pessoas/?format=json";
    const response = requestApi(url, "get");

    return response;
  },
  updateUser: (userID, user) => {
    const url = `/pessoas/${userID}/`;
    const response = requestApi(url, "put", user.value);

    return response;
  },
  postNewUser: (data) => {
    const url = "/pessoas/";
    const response = requestApi(url, "post", data);

    return response;
  },
});
