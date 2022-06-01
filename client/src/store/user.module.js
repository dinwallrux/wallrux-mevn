import VueJwtDecode from "vue-jwt-decode"

export default{
  state: {
    me: [],
		firstname: 'Fox',
		lastname: 'Tail'
  },
  mutations: {
		GET_USER(state, payload) {
			state.me = payload
		}
	},
  actions: {
    getUserDetails(context, payload) {
      const decode = VueJwtDecode.decode(payload)
			const me = context.state.me
			me.push(decode)
			context.commit('GET_USER', me)
    },
  },
	getters: {
		fullname(state) {
			return `Hello world`
		}
	}
}
