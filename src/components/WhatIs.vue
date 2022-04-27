<template>
  <div class="whatis">
    <h2>Kayla c’est...</h2>
    <div class="cards">
      <div v-for="(what, index) in whats" :key="index" class="card" :index="index" :style="{backgroundImage: 'url('+what.img+')', width: what.width, height: what.height}">
        <img class="icone" :src="what.icone" :style="{width: what.widthI, height: what.heightI}">
        <h3>{{what.title}}</h3>
        <span v-html="what.text"></span>
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
            width: "24.375em",
            height: "23.438em",
            icone: require('@/assets/images/Icone04.svg'),
            widthI: "5em",
            heightI: "4.688em",
          },
          {
            title: "Un catalogue bien rempli",
            text: "Réalisez plus de 150 activités avec vos enfants ! Chaque activité s’adapte à ce que vous préférez.",
            img: require('@/assets/images/PostIt05.svg'),
            width: "24.375em",
            height: "23.438em",
            icone: require('@/assets/images/Icone05.svg'),
            widthI: "4.938em",
            heightI: "6em",
          },
          {
            title: "Le matériel que vous avez",
            text: "Mettez à profit le matériel déjà à votre disposition pour choisir une activité.",
            img: require('@/assets/images/PostIt06.svg'),
            width: "24.375em",
            height: "22.813em",
            icone: require('@/assets/images/Icone06.svg'),
            widthI: "6.25em",
            heightI: "5.25em",
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
  font-size: 2.778em;
  letter-spacing: -0.03em;
  color: #5A475D;
  margin-left: 12%;
}

.whatis .cards {
  position: relative;
  margin-top: 6.25em;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.whatis .cards [index="0"] { color: #9B01A8 }
.whatis .cards [index="0"]::before {
  content: '';
  position: absolute;
  width: 3.75em;
  height:3.75em;
  background-image: url('../assets/images/Coeur.svg');
  background-repeat: no-repeat;
  background-size: contain;
  top: -1.7em;
  left: 0;
}

.whatis .cards [index="1"] {
  margin-top: -1.25em;
  color: #4295BB;
}
.whatis .cards [index="2"] { color: #6CA33B}


.whatis .cards [index="1"]::before {
  content: '';
  position: absolute;
  width: 7.563em;
  height: 2.125em;
  background-image: url('../assets/images/Fleche01.svg');
  background-repeat: no-repeat;
  background-size: contain;
  left: -3.75em;
  bottom: -1.25em;
}

.whatis .cards [index="1"]::after {
  content: '';
  position: absolute;
  width: 8.75em;
  height: 2.438em;
  background-image: url('../assets/images/Fleche02.svg');
  background-repeat: no-repeat;
  background-size: contain;
  right: -6.25em;
  top: -4.25em;
}

.whatis .cards [index="2"]::before {
  content: '';
  position: absolute;
  width: 2.5em;
  height: 3.125em;
  background-image: url('../assets/images/Coccinelle.svg');
  background-repeat: no-repeat;
  background-size: contain;
  top: 25%;
  right: -10%;
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
  font-size: 1.273em;
  line-height: 1em;
  margin: 0
}

.whatis .cards .card span {
  font-weight: 500;
  font-size: 1.042em;
  line-height: 2.75em;
  display: block;
  padding: 0 1em;
  margin: 1.313em 0 0 0;
  width: calc(100% - 5.7em);
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

@media screen and (max-width: 767px) {
  .whatis .cards [index="1"] {
    margin: 2.5em 0;
  }
  .whatis .cards [index="1"]::before {
    top: -2.25em;
    bottom: initial;
    transform: rotate(90deg);
  }
  .whatis .cards [index="1"]::after {
    top: initial;
    bottom: -1.25em;
    transform: rotate(90deg);
  }
}
</style>
