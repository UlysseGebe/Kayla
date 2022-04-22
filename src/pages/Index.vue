<template>
  <Layout>
    <Hero />
    <!-- <Stat />
    <Footer/> -->
  </Layout>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Stat from '~/components/Stat.vue'
import WhatIs from '~/components/WhatIs.vue'
import Newsletter from '~/components/Newsletter.vue'
import Download from '~/components/Download.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Hero,
    Stat,
    WhatIs,
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
</style>
