<template>
  <nav>
    <router-link to="/" class="logo">
      <img src="../assets/logo.svg" alt="V-Tube Logo" />
      <h1>VTube</h1>
    </router-link>
    <div class="search">
      <input type="text" v-model="searchtext" @keypress="search" />
      <img src="../assets/Search.png" alt="Search Icon" @click="reroute()" />
    </div>
    <router-link to="/upload">
      <img src="../assets/Upload.png" alt="Upload Link" class="upload" />
    </router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      searchtext: "",
    };
  },
  methods: {
    search(e) {
      if (e.key != "Enter") return;
      this.reroute();
    },
    reroute() {
      this.$router.push("/search/" + this.searchtext);
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  position: relative;
  background: #ffffff0f;
  height: 3.75vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.52vw 2.6vw;
  margin-bottom: 2.08vw;
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    img {
      width: 4.5vw;
      margin-right: 0.5vw;
    }
    h1 {
      font: normal normal normal 1.67vw/2.5vw Poppins;
      letter-spacing: -0.12vw;
      color: #ffffff;
    }
  }
  .search {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    input {
      width: 24.58vw;
      height: 1.67vw;
      background: transparent;
      border: 1px solid #707070;
      outline: 0;
      font-size: 1vw;
      padding-left: 0.5vw;
    }
    img {
      position: absolute;
      top: 50%;
      right: 0.35vw;
      transform: translateY(-50%);
    }
  }
}
</style>
