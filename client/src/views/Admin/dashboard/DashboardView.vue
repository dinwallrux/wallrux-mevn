<template>
  <div id="dashboard">
    <h1>Hello {{ $store.state.user.me[0].firstName }}</h1>
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "DashboardView",
  data() {
    return {
      user: {},
    };
  },
  methods: {
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decode = VueJwtDecode.decode(token);
      this.user = decode;
    },
    logoutUser() {
      localStorage.removeItem("jwt");
      this.$router.push("/");
    },
  },
  mounted() {
    const token = localStorage.getItem("jwt")
    this.$store.dispatch('user/getUserDetails', token)
    // console.log(this.$store)
  }
};
</script>
