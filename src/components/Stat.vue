<template>
  <div class="stat">
    <g-image alt="familly" src="~/assets/images/famille_1.png" fit="cover" />
    <div class="cards">
      <div v-for="(stat, index) in stats" :key="index">
        <div class="card">
          <h3>{{stat.num}}</h3>
          <span>{{stat.text}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Stat",
    data() {
      return {
        stats: [
          {
            num: "1h30",
            text: "de recherches en moins (par semaine)"
          },
          {
            num: "2h",
            text: "d’activité familiale en plus (par semaine)"
          },
          {
            num: "100",
            text: "parents déjà convaincus par notre application"
          },
        ]
      }
    }
}
</script>

<style>
.stat {
  width: 100%;
}

.stat .cards {
  transform: translateY(-50%);
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.stat .cards .card {
  background-color: #FFF;
  text-align: center;
  width: 380px;
  box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.09);
  border-radius: 20px;
  margin: 0 15px;
  padding: 75px 0 60px 0;
}

.stat .cards .card h3 {
  font-weight: 700;
  font-size: 80px;
  line-height: 109px;
  margin: 0
}

.stat .cards .card span {
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  display: block;
  padding: 0 35px;
  margin: 38px 0 0 0;
}
</style>
