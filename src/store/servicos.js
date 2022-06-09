import { reactive } from "vue";

const state = reactive({
  servicos: {},
});

export default state.servicos;

export function setServico(servicosId, servicosInfo) {
  state.servicos[servicosId] = servicosInfo;
}
