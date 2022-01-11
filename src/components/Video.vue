<template>
  <router-link
    class="video"
    :style="`background: url(${video.thumbnail})`"
    :to="`/watch/${video.id}`"
  >
    <h4>{{ video.titel }}</h4>
    <div class="details">
      <p>vor {{ getDifference(video.created_at) }}</p>
      <p><img src="../assets/Eye.png" alt="" />{{ video.views }}</p>
    </div>
  </router-link>
</template>

<script>
import date from "date-and-time";
export default {
  props: ["video"],
  methods: {
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
};
</script>

<style lang="scss">
.video {
  aspect-ratio: 16/9;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0.63vw 0.42vw;
  text-decoration: none;
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0.26vw 0.26vw 1.04vw 0.26vw #00000044;
  }
  h4 {
    font: normal normal normal 1.1vw/1.41vw Poppins;
    margin-bottom: 0.25vw;
  }
  .details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font: normal normal normal 0.83vw/0.94vw Poppins;
      color: #898989;
      img {
        width: 0.7vw;
        margin-right: 0.25vw;
      }
    }
  }
}
</style>
