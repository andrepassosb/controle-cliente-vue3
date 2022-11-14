import axios from "axios";
import UsersService from "./users";
import { setLoading } from "../store/loading";
import { setError } from "../store/error";
import ServicoService from "./servicos";
import AgendaService from "./agenda";
import PontuacaoService from "./pontuacao";

const baseURL = "https://controleatendimentos.herokuapp.com/api";

export async function requestApi(url, type, data = "") {
  setLoading(true);
  setError(false);
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
        setError(error);
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
  pontuacao: PontuacaoService(),
};
