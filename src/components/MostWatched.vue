<template>
  <div id="mostWatched">
    <header>
      <img src="../assets/Most viewed.png" alt="Most Watched" />
      <h1>Meistangesehen</h1>
    </header>
    <div class="carousel-background">
      <carousel
        :loop="true"
        :autoplay="true"
        :nav="false"
        :navText="['', '']"
        :navElement="'button'"
        :dots="true"
        :autoplayTimeout="5500"
        :autoplayHoverPause="true"
        :items="3"
        :mouseDrag="false"
        :touchDrag="false"
        :pullDrag="false"
        :margin="16"
        :autoHeight="true"
        :responsive="{
          0: {
            items: 3,
          },
        }"
        v-if="videos.length"
        ><Video :video="video" v-for="(video, i) of videos" :key="i" />
      </carousel>
      <carousel
        :loop="true"
        :autoplay="true"
        :nav="false"
        :navText="['', '']"
        :navElement="'button'"
        :dots="true"
        :autoplayTimeout="5500"
        :autoplayHoverPause="true"
        :items="3"
        :mouseDrag="false"
        :touchDrag="false"
        :pullDrag="false"
        :margin="16"
        :autoHeight="true"
        :responsive="{
          0: {
            items: 3,
          },
        }"
        v-else
        ><div class="video">
          <h4>Loading</h4>
          <div class="details">
            <p>vor 0 Sekunden</p>
            <p><img src="../assets/Eye.png" alt="" />1.000.000</p>
          </div>
        </div>
        <div class="video">
          <h4>Loading</h4>
          <div class="details">
            <p>vor 0 Sekunden</p>
            <p><img src="../assets/Eye.png" alt="" />1.000.000</p>
          </div>
        </div>

        <div class="video">
          <h4>Loading</h4>
          <div class="details">
            <p>vor 0 Sekunden</p>
            <p><img src="../assets/Eye.png" alt="" />1.000.000</p>
          </div>
        </div>

        <div class="video">
          <h4>Loading</h4>
          <div class="details">
            <p>vor 0 Sekunden</p>
            <p><img src="../assets/Eye.png" alt="" />1.000.000</p>
          </div>
        </div>

        <div class="video">
          <h4>Loading</h4>
          <div class="details">
            <p>vor 0 Sekunden</p>
            <p><img src="../assets/Eye.png" alt="" />1.000.000</p>
          </div>
        </div>

        <div class="video">
          <h4>Loading</h4>
          <div class="details">
            <p>vor 0 Sekunden</p>
            <p><img src="../assets/Eye.png" alt="" />1.000.000</p>
          </div>
        </div>

        <div class="video">
          <h4>Loading</h4>
          <div class="details">
            <p>vor 0 Sekunden</p>
            <p><img src="../assets/Eye.png" alt="" />1.000.000</p>
          </div>
        </div>

        <div class="video">
          <h4>Loading</h4>
          <div class="details">
            <p>vor 0 Sekunden</p>
            <p><img src="../assets/Eye.png" alt="" />1.000.000</p>
          </div>
        </div>

        <div class="video">
          <h4>Loading</h4>
          <div class="details">
            <p>vor 0 Sekunden</p>
            <p><img src="../assets/Eye.png" alt="" />1.000.000</p>
          </div>
        </div>
      </carousel>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import Video from "./Video.vue";

export default {
  components: { carousel, Video },
  props: ["videos"],
};
</script>

<style lang="scss">
#mostWatched {
  position: relative;
  .carousel-background {
    background: #ffffff0f;
    padding: 1.56vw 7.29vw;
    margin-bottom: 1.04vw;
  }
  header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5vw;
    margin-bottom: 1vw;
    padding: 0 7.29vw;
    h1 {
      font: normal normal normal 1.67vw/2.5vw Poppins;
    }
    img {
      width: 1.98vw;
    }
  }
}

.owl-carousel .video {
  aspect-ratio: 16/9;
  background: #000;
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

.owl-carousel,
.owl-carousel .owl-stage-outer,
.owl-stage {
  position: static !important;
}

.owl-dots {
  position: absolute;
  top: 0;
  right: 7.29vw;
  .owl-dot {
    span {
      width: 0.94vw !important;
      height: 0.94vw !important;
      background: #323232 !important;
    }
    &.active span {
      background: #991111 !important;
    }
  }
}
</style>
