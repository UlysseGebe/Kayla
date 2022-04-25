<template>
  <div class="avis">
    <h2>Ils nous font confiance</h2>
    <div class="cards">
      <div v-for="(what, index) in whats" :key="index">
        <div class="card" :index="index">
          <g-image alt="userCard" :src="what.img" fit="inside" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Avis",
    data() {
      return {
        whats: [
          {
            img: require('@/assets/images/User01.svg'),
          },
          {
            img: require('@/assets/images/User02.svg'),
          },
          {
            img: require('@/assets/images/User03.svg'),
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
  font-size: 45.1155px;
  line-height: 75px;
  letter-spacing: -0.03em;
  color: #4587A8;
}

.avis .cards {
  position: relative;
  margin-top: 68px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-image: url("../assets/images/nuage.svg");
  background-size: 100%;
  background-repeat: no-repeat;
  min-height: 419px;
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

.avis .cards .card h3 {
  font-weight: 800;
  font-size: 20.375px;
  line-height: 37px;
  margin: 0
}

.avis .cards .card span {
  font-weight: 500;
  font-size: 16.6705px;
  line-height: 37px;
  display: block;
  padding: 0 25px;
  margin: 21px 0 0 0;
}
</style>
