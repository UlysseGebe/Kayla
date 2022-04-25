<template>
  <div class="whatis">
    <h2>Kayla c’est...</h2>
    <div class="cards">
      <div v-for="(what, index) in whats" :key="index">
        <div class="card" :index="index" :style="{backgroundImage: 'url('+what.img+')', width: what.width, height: what.height}">
          <img class="icone" :src="what.icone">
          <h3>{{what.title}}</h3>
          <span v-html="what.text"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "WhatIs",
    data() {
      return {
        whats: [
          {
            title: "Un filtre superpuissant ",
            text: "Trouvez l’activité qui vous corresponde grâce à notre filtre personnalisé, simple et intuitif !",
            img: require('@/assets/images/PostIt04.svg'),
            icone: require('@/assets/images/Icone04.svg'),
            width: "390px",
            height: "375px"
          },
          {
            title: "Un catalogue bien rempli",
            text: "Réalisez plus de 150 activités avec vos enfants ! Chaque activité s’adapte à ce que vous préférez.",
            img: require('@/assets/images/PostIt05.svg'),
            icone: require('@/assets/images/Icone05.svg'),
            width: "390px",
            height: "375px"
          },
          {
            title: "Le matériel que vous avez",
            text: "Mettez à profit le matériel déjà à votre disposition pour choisir une activité.",
            img: require('@/assets/images/PostIt06.svg'),
            icone: require('@/assets/images/Icone06.svg'),
            width: "390px",
            height: "365px"
          },
        ]
      }
    }
}
</script>

<style>
.whatis {
  width: 100%;
  position: relative;
  font-family: "Avenir", Arial, sans-serif;
}

.whatis h2 {
  font-weight: 800;
  font-size: 44.4545px;
  line-height: 74px;
  letter-spacing: -0.03em;
  color: #5A475D;
  margin-left: 12%;
}

.whatis .cards {
  position: relative;
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.whatis .cards [index="0"] { color: #9B01A8 }
.whatis .cards [index="1"] {
  margin-top: -20px;
  color: #4295BB;
}
.whatis .cards [index="2"] { color: #6CA33B}


.whatis .cards [index="1"]::before {
  content: '';
  position: absolute;
  width: 121px;
  height: 34px;
  background-image: url('../assets/images/Fleche01.svg');
  background-repeat: no-repeat;
  background-size: contain;
  left: -60px;
  bottom: -20px;
}

.whatis .cards [index="1"]::after {
  content: '';
  position: absolute;
  width: 140px;
  height: 39px;
  background-image: url('../assets/images/Fleche02.svg');
  background-repeat: no-repeat;
  background-size: contain;
  right: -100px;
  top: -68px;
}

.whatis .cards .card {
  position: relative;
  text-align: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.whatis .cards .card h3 {
  font-weight: 800;
font-size: 20.375px;
line-height: 37px;
  margin: 0
}

.whatis .cards .card span {
  font-weight: 500;
  font-size: 16.6705px;
  line-height: 37px;
  display: block;
  padding: 0 25px;
  margin: 21px 0 0 0;
}

.whatis .icone {
  position: absolute;
  top: 0;
  background-repeat: no-repeat;
  transform: translateY(-50%);
}

.whatis .cards .card {
  aspect-ratio: 39 / 37.5;
}

.whatis .cards .card[index="2"] {
  aspect-ratio: 39 / 36.5;
}
</style>

<style>
@media screen and (max-width: 1160px) {
  .whatis .cards .card span {
    padding: 0 25px;
    margin: 14px 0 0 0;
  }
  .whatis .icone {
    transform: scale(0.8) translateY(-50%);
  }
}
@media screen and (max-width: 1050px) {
  .whatis .cards .card span {
    padding: 0 12px;
    margin: 8px 0 0 0;
  }
  .whatis .icone {
    transform: scale(0.7) translateY(-50%);
  }
}
</style>
