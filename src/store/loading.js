import { reactive } from "vue";

const state = reactive({
  status: false,
});

export default state;

export function setLoading(status) {
  state.status = status;
}
