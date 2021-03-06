import { requestApi } from ".";

export default () => ({
  getAllServicos: () => {
    const url = "/servicos/?format=json";
    const response = requestApi(url, "get");

    return response;
  },
  postNewServico: (data) => {
    const url = "/servicos/";
    const response = requestApi(url, "post", data);

    return response;
  },
});
