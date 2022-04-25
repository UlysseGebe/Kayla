
<template>
  <div class="download">
    <g-image class="famille" alt="famille" src="~/assets/images/famille.png" fit="inside" width="1440" />
    <div class="ctaZone">
      <h3>Si vous êtes intéressé <br/> téléchargez notre application  <span>!</span></h3>
      <p>Une occasion unique pour vous faire gagner du temps !</p>
      <div class="stores">
        <a href="#" class="apple">
          <img src="../assets/images/App_Store.svg" alt="Aplle Store" width="250">
        </a>
        <a href="#" class="google">
          <img src="../assets/images/Google_Play.svg" alt="Google Play" width="250">
        </a>
      </div>
    </div>
    <g-image class="koala" alt="Koala" src="~/assets/images/Koala.svg" />
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
  box-shadow: 0px 3px 36px rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  width: 70%;
  margin-top: -7%;
}

.download .ctaZone h3 {
  margin: 58px 0 18px 0;
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 60px;
  text-align: center;
  letter-spacing: -0.03em;
  color: #58445B;
}

.download .ctaZone p {
  margin: 0 0 27px 0;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #64607D;
}

.download .ctaZone .stores {
  margin-bottom: 42px;
}

.download .ctaZone .stores a {
  margin: 0 42px;
}

.download .famille {
  width: 100%;
}

.download .koala {
  margin-top: -24px;
}
</style>
