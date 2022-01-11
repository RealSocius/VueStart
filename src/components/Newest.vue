<template>
  <div id="newest">
    <header>
      <img src="../assets/Newest.png" alt="Newest Icon" />
      <h1>Neuste Videos</h1>
    </header>
    <section class="videogrid">
      <Video :video="video" v-for="(video, i) of videos" :key="i"></Video>
      <div id="about">
        <div class="title">
          <h2>Über uns</h2>
        </div>
        <p>
          Hi, wir sind V-Tube! Schön, dass du auf diese Seite gestoßen bist.
          <br /><br />
          Aber was ist V-Tube eigentlich? <br />
          Wir sind San Andreas erste Video Plattform. <br /><br />
          Und das beste? <br />
          Leb dich kreativ aus, lade ein Video bei uns hoch und verdiene an
          Klicks Geld. <br /><br />
          Klicke einfach oben rechts auf der Seite auf den Upload Button und dir
          wird alles erklärt.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import Video from "./Video.vue";
export default {
  props: ["videos"],
  components: {
    Video,
  },
};
</script>

<style lang="scss" scoped>
#newest {
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

    #about {
      grid-column: 3/4;
      grid-row: 1/3;
      background: #ffffff0f;
      box-shadow: 0vw 0.16vw 0.31vw #00000029;
      .title {
        border-left: 0.78vw solid #771111;
        background: #991111;
        padding: 0.26vw 0.78vw;
        h2 {
          font: normal normal normal 1.25vw/1.82vw Poppins;
        }
      }
      p {
        padding: 0.78vw;
        font: normal normal normal 0.94vw/1.25vw Nunito;
      }
    }
  }
}
</style>
