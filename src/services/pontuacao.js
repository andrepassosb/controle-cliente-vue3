import { requestApi } from ".";

export default () => ({
  getAllStars: () => {
    const url = "/pontuacao/?format=json";
    const response = requestApi(url, "get");

    return response;
  },
  postNewStar: (data) => {
    const url = "/pontuacao/";
    const response = requestApi(url, "post", data);

    return response;
  },
});
