<template>
  <div class="stat">
    <div class="cards">
      <div class="card" v-for="(stat, index) in stats" :key="index" :index="index" :style="{backgroundImage: 'url('+stat.img+')', width: stat.width, height: stat.height}">
        <h3>{{stat.num}}</h3>
        <span v-html="stat.text"></span>
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
            width: "24.375em",
            height: "23.125em"
          },
          {
            num: "2h",
            text: "<b>d’activité familiale</b> en plus<br/>(par semaine)",
            img: require('@/assets/images/PostIt02.svg'),
            width: "24.375em",
            height: "23.75em"
          },
          {
            num: "100",
            text: "<b>parents</b> déjà <b>convaincus</b><br/>par notre application",
            img: require('@/assets/images/PostIt03.svg'),
            width: "24.375em",
            height: "23.125em"
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
  width: 5.063em;
  height: 6.25em;
  background-image: url('../assets/images/Oiseau02.svg');
  background-repeat: no-repeat;
  background-size: contain;
  left: -3.75em;
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
  font-size: 8.396em;
  line-height: 0.75em;
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
  font-size: 1.343em;
  line-height: 1.5em;
  display: block;
  padding: 0 2.188em;
  margin: 0.75em 0 0 0;
}

.coloriage {
  width: 100%;
}
</style>
