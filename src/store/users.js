import { reactive } from "vue";

const state = reactive({
  users: {},
});

export default state.users;

export function setUser(userId, userInfo) {
  state.users[userId] = userInfo;
}
