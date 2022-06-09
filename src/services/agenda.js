import { requestApi } from ".";

export default () => ({
  getAgenda: () => {
    const url = "/agendamentos/?format=json";
    const response = requestApi(url, "get");

    return response;
  },
  postAgendamento: (data) => {
    const url = "/agendamentos/";
    const response = requestApi(url, "post", data);

    return response;
  },
});
