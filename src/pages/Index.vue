<template>
  <Layout>
    <Hero />
    <div class="papillon">
      <!-- <g-image class="papillonContent" alt="papillon" src="~/assets/images/Papillon-trianée.svg" fit="inside" width="360" height="300" /> -->
      <img
        class="papillonContent"
        alt="papillon"
        src="../assets/images/Papillon-trianée.svg"
        style="width:22.5em;height:18.75em;"
      />
    </div>
    <Stat />
    <div class="coupe">
      <img
        class="traiCoupe mob"
        alt="papillon"
        src="../assets/images/Trait-coupe-767.svg"
      />
      <img
        class="traiCoupe desk"
        alt="papillon"
        src="../assets/images/Trait-coupe.svg"
      />
    </div>
    <div class="sep01">&nbsp;</div>
    <WhatIs />
    <div class="sep02 desk">&nbsp;</div>
    <div class="sep02 mob">&nbsp;</div>
    <Avis />
    <Download />
    <Newsletter />
    <Footer />
    <div class="coupe2">
      <img
        class="traiCoupe mob"
        alt="papillon"
        src="../assets/images/Trait-coupe02-767.svg"
      />
      <img
        class="traiCoupe desk"
        alt="papillon"
        src="../assets/images/Trait-coupe02.svg"
      />
    </div>
  </Layout>
</template>

<script>
import Hero from "~/components/Hero.vue";
import Stat from "~/components/Stat.vue";
import WhatIs from "~/components/WhatIs.vue";
import Avis from "~/components/Avis.vue";
import Newsletter from "~/components/Newsletter.vue";
import Download from "~/components/Download.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Hero,
    Stat,
    WhatIs,
    Avis,
    Newsletter,
    Download,
    Footer,
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.papillon {
  position: relative;
  width: 100%;
}

.papillon .papillonContent {
  position: relative;
  left: 15%;
}

.sep01 {
  visibility: hidden;
  height: 11.25em;
}

.sep02.desk {
  background-image: url('../assets/images/sep02.svg');
}
.sep02.mob {
  background-image: url('../assets/images/sep02-767.svg');
}

.sep02 {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left center;
  height: 7.375em;
}

.coupe {
  position: relative;
}

.coupe img {
  position: absolute;
  width: 100%;
}

.coupe2 {
  position: relative;
}

.coupe2 img {
  z-index: -1;
  bottom: 0;
  position: absolute;
  width: 100%;
}
</style>
