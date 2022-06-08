import { requestApi } from ".";

export default () => ({
  getAllServicos: () => {
    const url = "/servicos/?format=json";
    const response = requestApi(url, "get");

    return response;
  },
});
