<template>
  <div id="search">
    <header>
      <img src="../assets/Search-1.png" alt="Search Icon" />
      <h1 v-if="searchtext">Suchergebnisse für {{ searchtext }}</h1>
      <h1>Alle Videos</h1>
    </header>
    <section class="videogrid">
      <Video :video="video" v-for="(video, i) of videos" :key="i"></Video>
    </section>
  </div>
</template>

<script>
import Video from "./Video.vue";
export default {
  props: ["videos", "searchtext"],
  components: {
    Video,
  },
};
</script>

<style lang="scss" scoped>
#search {
  padding: 0 7.29vw;
  margin-top: 2.08vw;
  header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5vw;
    margin-bottom: 1vw;
    h1 {
      font: normal normal normal 1.67vw/2.5vw Poppins;
    }
    img {
      width: 1.98vw;
    }
  }
  .videogrid {
    display: grid;
    grid-template-columns: repeat(3, calc(calc(100% - 1.66vw) / 3));
    column-gap: 0.83vw;
    row-gap: 1.04vw;
  }
}
</style>
