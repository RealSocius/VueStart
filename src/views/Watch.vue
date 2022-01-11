<template>
  <div>
    <div v-if="ready" class="video-player-box">
      <Artplayer @get-instance="getInstance" :option="option" :style="style" />
      <div class="infos">
        <h1>{{ video.titel }}</h1>
        <div class="details">
          <p>{{ video.views }} Aufrufe</p>
          <div class="dot"></div>
          <p>vor {{ getDifference(video.created_at) }}</p>
        </div>
      </div>
    </div>
    <Newest :videos="videos" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Newest from "../components/Newest.vue";
import Artplayer from "artplayer/examples/vue/Artplayer";
import date from "date-and-time";

export default {
  name: "Watch",
  data() {
    return {
      id: this.$route.params.video_id,
      ready: false,
      option: {
        url: "",
        title: "One More Time One More Chance",
        poster: "/assets/sample/poster.jpg",
        fullscreen: true,
        backdrop: true,
        theme: "#991111",
        volume: 1,
        autoSize: true,
        icons: {
          state: "",
        },
      },
      style: {
        "aspect-ratio": "16/9",
      },
    };
  },
  mounted() {
    this.set("videos");
    this.show(this.id).then(() => {
      this.option.url = this.video.link.url;
      this.ready = true;
    });
  },
  methods: {
    ...mapActions(["set", "show"]),
    getInstance(art) {
      console.log(art);
    },
    getDifference(created_at) {
      let today = new Date();
      let parsed_date = date.parse(created_at, "YYYY-MM-DD hh:mm:ss        ");

      // get total seconds between the times
      var delta = Math.abs(parsed_date - today) / 1000;

      // calculate (and subtract) whole days
      var years = Math.floor(delta / 31536000);
      if (years > 0) return years < 2 ? "1 Jahr" : years + " Jahre";
      delta -= years * 31536000;

      // calculate (and subtract) whole days
      var months = Math.floor(delta / 2592000);
      if (months > 0) return months < 2 ? "1 Monat" : months + " Monate";
      delta -= months * 2592000;

      // calculate (and subtract) whole days
      var weeks = Math.floor(delta / 604800);
      if (weeks > 0) return weeks < 2 ? "1 Woche" : weeks + " Wochen";
      delta -= weeks * 604800;

      // calculate (and subtract) whole days
      var days = Math.floor(delta / 86400);
      if (days > 0) return days < 2 ? "1 Tag" : days + " Tagen";
      delta -= days * 86400;

      // calculate (and subtract) whole hours
      var hours = Math.floor(delta / 3600) % 24;
      if (hours > 0) return hours < 2 ? "1 Stunde" : hours + " Stunden";
      delta -= hours * 3600;

      // calculate (and subtract) whole minutes
      var minutes = Math.floor(delta / 60) % 60;
      if (minutes > 0) return minutes < 2 ? "1 Minute" : minutes + " Minuten";
      delta -= minutes * 60;

      // what's left is seconds
      var seconds = delta % 60;
      if (seconds > 0) return seconds < 2 ? "1 Sekunde" : seconds + " Sekunden";
    },
  },
  computed: {
    ...mapGetters(["get"]),
    video() {
      return this.get("video");
    },
    videos() {
      return this.get("videos");
    },
  },
  components: {
    Newest,
    Artplayer,
  },
};
</script>

<style lang="scss" scoped>
.video-player-box {
  padding: 0 15.29vw;
  .infos {
    background: #ffffff0f;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.83vw 2.08vw;
    h1 {
      font: normal normal 300 1.25vw/1.82vw Poppins;
    }
    p {
      font: normal normal normal 0.94vw/1.41vw Poppins;
      color: #898989;
    }
    .dot {
      width: 0.42vw;
      height: 0.42vw;
      border-radius: 50%;
      background: #898989;
    }
    .details {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.52vw;
    }
  }
}
</style>
