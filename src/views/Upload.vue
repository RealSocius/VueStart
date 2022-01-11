<template>
  <div>
    <div id="upload">
      <header>
        <img src="../assets/Upload_Red.png" alt="Upload Icon Red" />
        <h1>Videos hochladen</h1>
      </header>
      <div class="steps">
        <div class="step">
          <img src="../assets/Upload_Step_1.png" alt="Upload Step 1" />
          <h2>1. Einreichen</h2>
          <p>
            Lade dein Video hoch und schicke uns anschließen das Video, ein
            Thumbnail und den Videotitel an die 1822-12345678.
          </p>
        </div>
        <div class="step">
          <img src="../assets/Upload_Step_2.png" alt="Upload Step 2" />
          <h2>2. Bestätigung</h2>
          <p>
            Wenn alles mit deinem Video passen sollte, bekommst du eine
            Bestätigung, ansonsten wirst du auf Mängel hingewiesen.
          </p>
        </div>
        <div class="step">
          <img src="../assets/Upload_Step_3.png" alt="Upload Step 3" />
          <h2>3. Geld verdienen</h2>
          <p>
            Anschließend kannst du uns deine VBAN schicken und wir Werten
            wöchentlich die Klicks aus und du erhältst Geld.
          </p>
        </div>
        <div class="step">
          <img src="../assets/Upload_Step_4.png" alt="Upload Step 4" />
          <h2>4. Werbung</h2>
          <p>
            Bei uns kannst du kostenlos Werbevideos hochladen. An diesen kannst
            du kein Geld verdienen.
          </p>
        </div>
        <div class="step">
          <img src="../assets/Upload_Step_5.png" alt="Upload Step 5" />
          <h2>5. Spenden</h2>
          <p>
            Da wir weder an Werbung kein Geld verdienen freuen wir uns über
            Spenden an die VBAN 123456.
          </p>
        </div>
        <div class="step">
          <img src="../assets/Upload_Step_6.png" alt="Upload Step 6" />
          <h2>6. Was ist erlaubt?</h2>
          <p>
            Es gelten die selben Rahmenbedingungen wie auch beim Posten von
            Bildern auf Social.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Upload",
};
</script>

<style lang="scss" scoped>
#upload {
  padding: 0 7.29vw;
  header {
    margin-top: 4vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5vw;
    margin-bottom: 4vw;
    h1 {
      font: normal normal normal 1.67vw/2.5vw Poppins;
    }
    img {
      width: 1.98vw;
    }
  }
  .steps {
    display: grid;
    grid-template-columns: repeat(3, calc(calc(100% - 8vw) / 3));
    column-gap: 4vw;
    row-gap: 2vw;
    place-items: center;
    margin-bottom: 3vw;
    .step {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    h2 {
      text-align: center;
      margin: 1.04vw auto;
      font: normal normal bold 1.41vw/2.03vw Poppins;
      color: #cccccc;
    }
    p {
      text-align: center;
      font: normal normal normal 0.94vw/1.35vw Nunito;
      color: #a7a7ad;
    }
  }
}
</style>
