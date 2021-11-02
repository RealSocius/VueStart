<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view :key="$route.fullPath" />
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>
