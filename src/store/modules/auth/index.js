import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

export default {
  //
  state() {
    return {
      userId: null,
      token: null,
      didAutoLogout: false,
      // tokeExpiration: null,
    };
  },
  //
  mutations: mutations,
  //
  actions: actions,
  //
  getters: getters,
};
