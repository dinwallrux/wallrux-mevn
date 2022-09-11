<template>
  <div id="shop">
    <form @submit.prevent="createShop">
      <div class="mb-6">
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Name</label
        >
        <input
          type="text"
          id="name"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Your shop name"
          v-model="shop.name"
        />
      </div>
      <div class="mb-6">
        <label
          for="description"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Description</label
        >
        <textarea
          id="description"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          v-model="shop.description"
					placeholder="Write your shop description"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div class="mb-6">
        <label
          for="address"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >address</label
        >
        <input
          type="text"
          id="address"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Your shop address"
          v-model="shop.address"
        />
      </div>
      <div class="mb-6">
        <label
          for="published"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Published</label
        >
        <input
          type="checkbox"
          id="published"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          v-model="shop.published"
        />
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Create shop
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shop: {
        name: "",
        description: "",
        address: "",
        image: "",
        published: false,
      },
    };
  },
  method: {
    createShop() {
      console.log("shop created");
    },
  },
};
</script>
