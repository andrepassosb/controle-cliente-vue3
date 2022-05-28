import { requestApi } from ".";

export default () => ({
  getAllUsers: () => {
    const url = "/pessoas/?format=json";
    const response = requestApi(url, "get");

    return response;
  },
});
