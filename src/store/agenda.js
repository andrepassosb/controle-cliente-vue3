import { reactive } from "vue";

const state = reactive({
  agenda: {
    data: [],
  },
});

export default state.agenda;

export function setAgenda(agenda) {
  state.agenda.data = agenda;
  console.log("agenda", state.agenda);
}
