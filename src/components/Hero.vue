<template>
  <div class="hero">
    <div class="text">
      <div class="content">
        <h1>Les activités au bout des doigts avec <span>Kailya !</span></h1>
        <h2>Profitez de la vie familiale à plein temps : nous vous proposons des activités qui épanouiront vos enfants, et qui vous épanouiront ! </h2>
      </div>
    </div>
    <div class="image">
      <img alt="kailya phone" src="../assets/images/kailya_phone.svg" fit="inside" style="width:18.04em;height:30.982em;">
    </div>
  </div>
</template>

<script>
export default {
    name: "Hero"
}
</script>

<style>
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: calc(100vh - 10em);
  padding: 5em 0;
  margin: 0 auto;
  width: 85%;
}

@media screen and (max-width: 767px) and (orientation:portrait) {
  .hero {
    min-height: fit-content;
    flex-direction: column;
  }
}

.hero .text {
  display: flex;
  position: relative;
  justify-content: flex-start;
  width: 57.5%;
  padding-right: 2.5%;
}

.hero .text::before {
  content: '';
  position: absolute;
  width: 3.5em;
  height: 1.75em;
  background-image: url('../assets/images/Bonbon.svg');
  background-repeat: no-repeat;
  background-size: contain;
  left: 40%;
  top: -2em;
}

.hero .image {
  display: flex;
  justify-content: flex-end;
  width: 40%;
}

@media screen and (max-width: 767px) {
  .hero {
    min-height: fit-content;
    flex-direction: column;
  }

  .hero .text {
    width: 100%;
    padding-right: 0;
    justify-content: center;
  }

  .hero .image {
    width: 100%;
    justify-content: center;
  }
}

.hero .text .content {
  max-width: 45em;
  font-family: "Avenir", Arial, sans-serif;
}

.hero h1 {
  position: relative;
  font-style: normal;
  font-weight: 800;
  font-size: 3.75em;
  line-height: 1.25em;
  letter-spacing: -0.03em;
  color: #55A5CA;
}

.hero .text .content h1::before {
  content: '';
  position: absolute;
  width: 0.625em;
  height: 0.9em;
  background-image: url('../assets/images/Fleur.svg');
  background-repeat: no-repeat;
  background-size: contain;
  right: 0;
  bottom: 0;
}

.hero h1 span {
  display: inline-block;
  font-size: 1.75em;
  font-weight: 400;
  letter-spacing: -0.03em;
  color: #005B85;
  font-family: "Cream Cake", Comic Sans, sans-serif;
}

.hero h2 {
  position: relative;
  font-weight: 500;
  font-size: 1.75em;
  line-height: 1.5em;
  color: #55A5CA;
}

.hero .text .content h2::before {
  content: '';
  position: absolute;
  width: 1.19em;
  height: 1.19em;
  background-image: url('../assets/images/Feuille.svg');
  background-repeat: no-repeat;
  background-size: contain;
  left: -2em;
  top: 35%;
}
</style>