import { readonly } from "vue";
import data from "./data";
import state from "./servicos";

export default readonly({
  users: data.users,
  servicos: state.servicos,
});
