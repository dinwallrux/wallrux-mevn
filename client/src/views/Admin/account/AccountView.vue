<template>
  <div id="account">
    <form @submit.prevent="updateAccount">
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
            v-model="account.firstName"
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
            v-model="account.lastName"
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
          v-model="account.username"
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
          v-model="account.email"
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
          v-model="account.password"
          autocomplete
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
          v-model="account.confirmPassword"
          autocomplete
        />
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Update account
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: {
        firstName: this.$store.getters['user/getMe'].firstname,
        lastName: this.$store.getters['user/getMe'].lastname,
        username: this.$store.getters['user/getMe'].username,
        email: this.$store.getters['user/getMe'].email,
      },
    }
  },
	created () {
		// console.log(this.$store.getters['user/getMe'])
    // console.log(this.$store.state.user.me)
	},
	methods: {
		async updateAccount () {
			try {
        let response = await this.$http.patch("user/update/{_id}", this.account)
        console.log(response);
      } catch (err) {
        let error = err.response
        if (error.status == 409) {
          console.error("error ==> ", error.data.message)
        } else {
          console.error('error ==> ', error.data.err.message)
        }
      }
		}
	}
};
</script>
