import VueJwtDecode from "vue-jwt-decode";

export default {
	namespaced: true,
  state: {
    me: [],
  },
  mutations: {
    GET_USER(state, payload) {
      state.me = payload;
    },
  },
  actions: {
    getUserDetails(context, payload) {
      const decode = VueJwtDecode.decode(payload);
      const me = context.state.me;
      me.push(decode);
      context.commit("GET_USER", me);
    },
  },
  getters: {
    getMe(state) {
      return {
        firstname: state.me[0].firstName,
        lastname: state.me[0].lastName,
        username: state.me[0].username,
        email: state.me[0].email
      }
    } 
  },
};
