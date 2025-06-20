export default {
  setUser(state, payload) {
    state.userId = payload.userId;
    state.token = payload.token;
    state.tokeExpiration = payload.tokeExpiration;
  },
};
