
<template>
  <div class="download">
    <g-image class="famille" alt="famille" src="~/assets/images/famille.png" fit="inside" width="1440" />
    <div class="ctaZone">
      <h3>Téléchargez notre application <br> et bénéficiez de l’offre d’essai <span>!</span></h3>
      <p>Une occasion unique pour vous faire gagner du temps !</p>
      <div class="stores">
        <a href="#" class="apple">
          <img src="../assets/images/App_Store.svg" alt="Aplle Store" style="width:15.625em">
        </a>
        <a href="#" class="google">
          <img src="../assets/images/Google_Play.svg" alt="Google Play" style="width:15.625em">
        </a>
      </div>
    </div>
    <img class="koala" alt="Koala" src="../assets/images/Koala.svg" style="width:12.813em;height:12.375em;" />
  </div>
</template>

<script>
export default {
    name: "Download"
}
</script>

<style>
.download {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Avenir", Arial, sans-serif;
}

.download .ctaZone {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0 0.188em 2.25em rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  width: 70%;
  margin-top: -7%;
}

.download .ctaZone h3 {
  margin: 2em 0 0.5em 0;
  font-style: normal;
  font-weight: 800;
  font-size: 2.5em;
  line-height: 1.5em;
  text-align: center;
  letter-spacing: -0.03em;
  color: #58445B;
}

.download .ctaZone p {
  margin: 0 0 1.5em 0;
  font-style: normal;
  font-weight: 500;
  font-size: 1.25em;
  line-height: 1.75em;
  text-align: center;
  letter-spacing: -0.02em;
  color: #64607D;
}

.download .ctaZone .stores {
  margin-bottom: 2.625em;
}

.download .ctaZone .stores a {
  margin: 0 2.625em;
}

.download .famille {
  width: 100%;
}

.download .koala {
  margin-top: -1.5em;
}
</style>
