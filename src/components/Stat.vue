<template>
  <div class="stat">
    <div class="cards">
      <div v-for="(stat, index) in stats" :key="index">
        <div class="card" :index="index" :style="{backgroundImage: 'url('+stat.img+')', width: stat.width, height: stat.height}">
          <h3>{{stat.num}}</h3>
          <span v-html="stat.text"></span>
        </div>
      </div>
    </div>
      <g-image class="coloriage" alt="Coloriage" src="~/assets/images/Coloriage.png" fit="inside" width="1440" />
  </div>
</template>

<script>
export default {
    name: "Stat",
    data() {
      return {
        stats: [
          {
            num: "2h",
            text: "de <b>recherches en moins</b><br/>(par semaine)",
            img: require('@/assets/images/PostIt01.svg'),
            width: "390px",
            height: "370px"
          },
          {
            num: "2h",
            text: "<b>d’activité familiale</b> en plus<br/>(par semaine)",
            img: require('@/assets/images/PostIt02.svg'),
            width: "390px",
            height: "380px"
          },
          {
            num: "100",
            text: "<b>parents</b> déjà <b>convaincus</b><br/>par notre application",
            img: require('@/assets/images/PostIt03.svg'),
            width: "390px",
            height: "370px"
          },
        ]
      }
    }
}
</script>

<style>
.stat {
  width: 100%;
  position: relative;
}

.stat .cards {
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  left: 0;
  right: 0;
  width: 100%;
  top: -5%;
}

.stat .cards .card[index="0"]::before {
  content: '';
  position: absolute;
  width: 81px;
  height: 100px;
  background-image: url('../assets/images/Oiseau02.svg');
  background-repeat: no-repeat;
  background-size: contain;
  left: -60px;
  bottom: 30%;
}

.stat .cards .card {
  position: relative;
  text-align: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.stat .cards .card h3 {
  font-family: "Cream Cake", Comic Sans, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 134.339px;
  line-height: 100px;
  text-align: center;
  margin: 0
}

.stat .cards .card {
  aspect-ratio: 39 / 37;
}

.stat .cards .card[index="1"] {
  aspect-ratio: 39 / 38;
}

.stat .cards .card[index="0"] { color: #116992 }
.stat .cards .card[index="1"] { color: #528426 }
.stat .cards .card[index="2"] { color: #9B01A8 }

.stat .cards .card span {
  font-family: var(--Main-Font);
  font-weight: 500;
  font-size: 21.4942px;
  line-height: 36px;
  display: block;
  padding: 0 35px;
  margin: 12px 0 0 0;
}

.coloriage {
  width: 100%;
}
</style>

<style>
@media screen and (max-width: 1160px) {
  .stat .cards .card span {
    padding: 0 25px;
    margin: 8px 0 0 0;
  }
}
@media screen and (max-width: 1050px) {
  .stat .cards .card span {
    padding: 0 12px;
    margin: 4px 0 0 0;
  }
}
</style>
