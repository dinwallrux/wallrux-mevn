<template>
  <div id="register-page">
    <form @submit.prevent="registerUser">
      <div class="flex justify-between mb-6">
        <div class="relative z-0 w-full group mr-3">
          <label
            for="first-name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >First Name</label
          >
          <input
            type="text"
            id="first-name"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Jhon"
            v-model="register.firstName"
            required
          />
        </div>
        <div class="relative z-0 w-full group ml-3">
          <label
            for="last-name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Last Name</label
          >
          <input
            type="text"
            id="last-name"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Doe"
            v-model="register.lastName"
            required
          />
        </div>
      </div>
      <div class="mb-6">
        <label
          for="username"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Username</label
        >
        <input
          type="text"
          id="username"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Jhon"
          v-model="register.username"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Email</label
        >
        <input
          type="email"
          id="email"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="youremail@mail.com"
          v-model="register.email"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Password</label
        >
        <input
          type="password"
          id="password"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          v-model="register.password"
          autocomplete
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="confirm-password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Confirm password</label
        >
        <input
          type="password"
          id="confirm-password"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          v-model="register.confirmPassword"
          autocomplete
          required
        />
      </div>
      <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            value=""
            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            required
          />
        </div>
        <label
          for="terms"
          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >I agree with the
          <a href="#" class="text-blue-600 hover:underline dark:text-blue-500"
            >terms and conditions</a
          ></label
        >
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Register new account
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      register: {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    async registerUser() {
      try {
        let response = await this.$http.post("user/register", this.register);
        console.log(response);
        let token = response.data.token;
        if (token) {
          localStorage.setItem("jwt", token);
          this.$router.push("/");
          alert("registeration success");
        } else {
          alert("registration failed");
        }
      } catch (err) {
        let error = err.response;
        if (error.status == 409) {
          alert("error ==> ", error.data.message);
        } else {
          alert("error ==> ", error.data.err.message);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#register-page {
  width: 450px;
	max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
