import { reactive } from "vue";

const state = reactive({
  pontuacao: {},
});

export default state.pontuacao;

export function setUser(userId, pontuacao) {
  state.pontuacao[userId] = pontuacao;
}
