<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <div class="bg-yellow-300 items-center h-screen">
      <div class="text-4xl">Hello 👋🏼</div>
    </div>
  </div>
  <router-view />
</template>

<script>
import "./assets/tailwind.css";
import store from "./store";
import { provide } from "vue";
// import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  // components: { NavBar },
  setup() {
    provide("store", store);
    return {
      store,
      // NavBar,
    };
  },
};
</script>
