import { reactive } from "vue";

const state = reactive({
  error: false,
});

export default state;

export function setError(status) {
  state.error = status;
}
