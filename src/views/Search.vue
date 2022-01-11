<template>
  <div>
    <Searchresults :videos="searchresults" :searchtext="search" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Searchresults from "../components/Searchresults.vue";
export default {
  name: "Search",
  mounted() {
    if (!this.search) return this.$router.push("/");
    this.set("videos");
  },
  methods: {
    ...mapActions(["set"]),
  },
  computed: {
    ...mapGetters(["get"]),
    videos() {
      return this.get("videos");
    },
    search() {
      return this.$parent.$refs.navbar.searchtext;
    },
    searchresults() {
      return this.videos.filter((video) => {
        return video.titel.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  components: {
    Searchresults,
  },
};
</script>

<style lang="scss" scoped></style>
