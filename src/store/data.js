import { reactive } from "vue";

const state = reactive({
  users: {},
});

export default state;

export function setUser(userId, userInfo) {
  state.users[userId] = userInfo;
}
