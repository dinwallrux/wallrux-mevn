import { createStore } from "vuex";
import UserModule from "./user.module";

export default createStore({
	namespaced: true,
  modules: {
    user: UserModule,
  },
});
