import { reactive } from "vue";

const state = reactive({
  servicos: {},
});

export default state;
export function setServico(servicosId, servicosInfo) {
  state.servicos[servicosId] = servicosInfo;
}
