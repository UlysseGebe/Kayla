<template>
  <div class="avis">
    <h2>Ils nous font confiance</h2>
    <div class="cards">
        <div class="card" v-for="(avi, index) in avis" :key="index" :index="index">
          <img :src="avi.img" alt="userCard" :style="{width: avi.width, height: avi.height}">
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "Avis",
    data() {
      return {
        avis: [
          {
            img: require('@/assets/images/User01.svg'),
            width: "24.063em",
            height: "18.813em"
          },
          {
            img: require('@/assets/images/User02.svg'),
            width: "23.75em",
            height: "18.938em"
          },
          {
            img: require('@/assets/images/User03.svg'),
            width: "24.25em",
            height: "19em"
          },
        ]
      }
    }
}
</script>

<style>
.avis {
  width: 100%;
  position: relative;
}

.avis h2 {
  margin-left: 12%;
  font-family: "Avenir", Arial, sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 2.813em;
  line-height: 1em;
  letter-spacing: -0.03em;
  color: #4587A8;
}

.avis .cards {
  position: relative;
  margin-top: 4.25em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-image: url("../assets/images/nuage.svg");
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  min-height: 26.188em;
}

.avis .cards .card {
  position: relative;
  text-align: center;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  background-size: contain;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
