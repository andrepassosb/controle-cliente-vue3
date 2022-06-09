import { readonly } from "vue";
import users from "./users";
import servicos from "./servicos";
import loading from "./loading";
import agenda from "./agenda";

export default readonly({
  users,
  servicos,
  loading,
  agenda,
});
