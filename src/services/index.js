import axios from "axios";
import UsersService from "./users";
import { setLoading } from "../store/loading";
import ServicoService from "./servicos";
import AgendaService from "./agenda";

const baseURL = "https://controleatendimentos.herokuapp.com/api";

export async function requestApi(url, type, data = "") {
  setLoading(true);
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
        setLoading(false);
        resolve(response);
        return responseData(response);
      })
      .catch((error) => {
        setLoading(false);
        resolve(error.response);
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
  servicos: ServicoService(),
  agenda: AgendaService(),
};
