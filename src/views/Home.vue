<template>
  <div>
    <MostWatched v-if="mostWatched.length" :videos="mostWatched" />
    <Newest :videos="videos" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Newest from "../components/Newest.vue";
import MostWatched from "../components/MostWatched.vue";
export default {
  name: "Home",
  data() {
    return {
      names: ["videos"],
      mostWatched: [],
    };
  },
  mounted() {
    this.set("videos").then(() => {
      this.mostWatched = this.mostWatchedVideos(this.videos);
    });
  },
  methods: {
    ...mapActions(["set"]),
    mostWatchedVideos(videos) {
      let result = [];
      Array.prototype.push.apply(result, videos);
      return result
        .sort((a, b) => {
          return Number(b.views) - Number(a.views);
        })
        .slice(0, 9);
    },
  },
  computed: {
    ...mapGetters(["get"]),
    videos() {
      return this.get("videos");
    },
  },
  components: {
    Newest,
    MostWatched,
  },
};
</script>

<style lang="scss" scoped></style>
