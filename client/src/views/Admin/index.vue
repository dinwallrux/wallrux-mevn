<template>
  <div class="admin flex h-screen">
    <Sidebar />
    <main class="w-full h-screen">
      <Navbar />
			<div class="container px-6 py-6 mx-auto overflow-y-auto">
				<router-view></router-view>
			</div>
    </main>
  </div>
</template>

<script>
import Sidebar from "@/components/sidebar/Sidebar.vue";
import Navbar from "../../components/header/Navbar.vue";
export default {
  name: "AdminIndex",
  components: { Sidebar, Navbar },
};
</script>

<style>
@import "@/assets/base.css";
</style>
