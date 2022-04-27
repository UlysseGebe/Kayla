
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0 0.188em 2.25em rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  width: calc(70% - 2em);
  margin-top: -7%;
  padding: 0 2em;
}

.download .ctaZone::before {
  content: '';
  position: absolute;
  width: 10.813em;
  height: 10.188em;
  background-image: url('../assets/images/Soleil.svg');
  background-repeat: no-repeat;
  background-size: contain;
  left: -5.5em;
  bottom: 10%;
}

.download .ctaZone::after {
  content: '';
  position: absolute;
  width: 3.375em;
  height: 7.75em;
  background-image: url('../assets/images/Glace.svg');
  background-repeat: no-repeat;
  background-size: contain;
  right: -2em;
  bottom: calc(50% - 7.75em);
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
  position: relative;
  display: inline-block;
}

.download .ctaZone .stores a:first-child::before {
  content: '';
  position: absolute;
  width: 3.75em;
  height: 3em;
  background-image: url('../assets/images/Scotch1.svg');
  background-repeat: no-repeat;
  background-size: contain;
  top: -1.25em;
  left: -1.25em;
}

.download .ctaZone .stores a:first-child::after {
  content: '';
  position: absolute;
  width: 3em;
  height: 2.5em;
  background-image: url('../assets/images/Scotch2.svg');
  background-repeat: no-repeat;
  background-size: contain;
  bottom: -1.25em;
  right: -1.25em;
}

.download .ctaZone .stores a:last-child::before {
  content: '';
  position: absolute;
  width: 5.813em;
  height: 1.438em;
  background-image: url('../assets/images/Scotch3.svg');
  background-repeat: no-repeat;
  background-size: contain;
  top: -0.75em;
  left: calc(50% - 5.813em/2);
}

@media screen and (max-width: 767px) {
  .download .ctaZone .stores {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .download .ctaZone .stores a:first-of-type {
    margin-bottom: 1em;
  }
}

.download .famille {
  width: 100%;
}

.download .koala {
  margin-top: -1.5em;
  position: relative;
  z-index: 2;
}
</style>
