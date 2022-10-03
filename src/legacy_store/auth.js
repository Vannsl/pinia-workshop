import { createStore } from "vuex";
// Legacy Vuex Store

const sleep = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

const store = createStore({
  state: {
    authenticatedUserId: 1,
    isAdmin: true,
  },
  getters: {
    isUserAuthenticated: (state) => {
      return state.authenticatedUserId !== null;
    },
    isUserAuthenticatedAsAdmin: (state, getters) => {
      return getters["isUserAuthenticated"] && state.isAdmin;
    },
  },
  actions: {
    async signIn({ commit }, { isAdmin }) {
      await sleep();
      commit("SET_AUTHENTICATED_USER_ID", 1);
      commit("SET_IS_ADMIN", isAdmin);
    },
    async signOut({ commit }) {
      await sleep();
      commit("SET_AUTHENTICATED_USER_ID", null);
      commit("SET_IS_ADMIN", false);
    },
  },
  mutations: {
    SET_AUTHENTICATED_USER_ID(state, id) {
      state.authenticatedUserId = id;
    },
    SET_IS_ADMIN(state, value) {
      state.isAdmin = value;
    },
  },
});

export default store;
