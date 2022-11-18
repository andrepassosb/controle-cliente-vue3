import { readonly } from "vue";
import users from "./users";
import servicos from "./servicos";
import loading from "./loading";
import error from "./error";
import agenda from "./agenda";
import pontuacao from "./pontuacoes";

export default readonly({
  users,
  servicos,
  loading,
  agenda,
  error,
  pontuacao,
});
