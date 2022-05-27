// import { requestApi } from ".";

export default () => ({
  getAllUsers: () => {
    // const url = "/pessoas/?format=json";
    // const response = requestApi(url, "get");

    const response = {
      data: [
        {
          id: 1,
          username: "admin",
          cpf: "",
          first_name: "",
          last_name: "",
          endereco: null,
          nascimento: null,
          telefone: null,
          email: "controleatendimentos@univesp.br",
          is_atendente: false,
          is_gerente: false,
          new_password: null,
        },
        {
          id: 2,
          username: "teste10",
          cpf: "21224565907",
          first_name: "teste10",
          last_name: "teste10",
          endereco: "teste10",
          nascimento: "1979-05-15",
          telefone: null,
          email: "teste10@teste10.com",
          is_atendente: false,
          is_gerente: false,
          new_password: null,
        },
        {
          id: 3,
          username: "andre.passos",
          cpf: "12345678910",
          first_name: "André",
          last_name: "Passos",
          endereco: "Rua 10",
          nascimento: "1990-08-06",
          telefone: "1799998888",
          email: "andre@gmail.com",
          is_atendente: false,
          is_gerente: true,
          new_password: null,
        },
      ],
    };

    return response;
  },
});
