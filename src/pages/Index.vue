<template>
  <Layout>
    <Hero />
    <div class="papillon">
      <!-- <g-image class="papillonContent" alt="papillon" src="~/assets/images/Papillon-trianée.svg" fit="inside" width="360" height="300" /> -->
      <img class="papillonContent" alt="papillon" src="../assets/images/Papillon-trianée.svg" style="width:22.5em;height:18.75em;" />
    </div>
    <Stat />
    <WhatIs />
    <div class="sep01">&nbsp;</div>
    <Avis />
    <Newsletter />
    <Download />
    <Footer/>
  </Layout>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Stat from '~/components/Stat.vue'
import WhatIs from '~/components/WhatIs.vue'
import Avis from '~/components/Avis.vue'
import Newsletter from '~/components/Newsletter.vue'
import Download from '~/components/Download.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Hero,
    Stat,
    WhatIs,
    Avis,
    Newsletter,
    Download,
    Footer,
  }
}
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
</style>
