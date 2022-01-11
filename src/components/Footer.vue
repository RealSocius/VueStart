<template>
  <footer>
    <img class="waves" src="../assets/Waves.svg" alt="Waves" />
    <div class="infos">
      <p class="info">
        VTube by WebTower <br />
        Inh. Sebastian Schindler
      </p>
      <img src="../assets/verified.png" alt="StateV" />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  margin-top: -3vw;
  z-index: -1;
  .waves {
    z-index: -1;
    width: 100%;
    display: block;
    user-select: none;
  }
  .infos {
    background: #721011;
    padding: 0 6.46vw;
    height: 7.29vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font: normal normal normal 1.25vw/1.67vw Nunito;
    }
    img {
      width: 8.75vw;
      place-self: flex-start;
    }
  }
}
</style>
