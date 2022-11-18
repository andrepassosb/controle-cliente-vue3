import { reactive } from "vue";

const state = reactive({
  pontuacao: {},
});

export default state.pontuacao;

export function setPontuacao(userId, pontuacao) {
  if (!state.pontuacao[userId]) state.pontuacao[userId] = [];
  state.pontuacao[userId].push(pontuacao);
}

export function resetPontuacao() {
  state.pontuacao = {};
}
