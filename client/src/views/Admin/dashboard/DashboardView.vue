<template>
  <div id="dashboard">
    <h1>Hello {{ user.username }}</h1>
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
  created() {
    this.getUserDetails();
  },
};
</script>
