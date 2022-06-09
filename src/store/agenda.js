import { reactive } from "vue";

const state = reactive({
  agenda: {},
});

export default state.agenda;

export function setAgenda(agenda) {
  state.agenda = agenda;
}
