import { requestApi } from ".";

export default () => ({
  getAllUsers: () => {
    const url = "/pessoas/?format=json";
    const response = requestApi(url, "get");

    return response;
  },
  updateUser: (userID, user) => {
    const url = `/pessoas/${userID}/?format=json`;
    const response = requestApi(url, "post", user);

    return response;
  },
});
