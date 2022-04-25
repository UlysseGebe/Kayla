<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/" class="siteName">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <div class="socials-links">
        <a href="#" target="_blank">
          <img src="../assets/images/linkedin.svg" alt="" width="20" height="20">
        </a>
        <a href="#" target="_blank">
          <img src="../assets/images/messenger.svg" alt="" width="20" height="20">
        </a>
        <a href="#" target="_blank">
          <img src="../assets/images/twitter.svg" alt="" width="20" height="20">
        </a>
      </div>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  metaInfo: {
    htmlAttrs: {
      lang: 'fr',
      // amp: true
    },
    // bodyAttrs: {
    //   class: ['dark-mode', 'mobile']
    // }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap');
@font-face {
  font-family: "Cream Cake";
  src: url("../assets/fonts/Cream_Cake.otf");
}

:root {
  --Light-Color: #58445B;
  --Dark-Color: #FFF;
  --Bold-Color: #4587A8;
  --Placeholde: rgba(117, 112, 149, 0.5);
  --Main-Font: "Manrope", Arial, sans-serif;
  --Second-Front: "Avenir", Arial, sans-serif;
}

body {
  font-family: var(--Main-Font);
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 100vw;
  margin: 0 auto;
  /* padding-left: 20px;
  padding-right: 20px; */
}

.header {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 42px 121px;
}

.nav__link {
  margin-left: 20px;
}

.siteName {
  color: #58445B;
  text-decoration: none;
  font-family: var(--Main-Font);
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  text-transform: uppercase;
}
</style>
